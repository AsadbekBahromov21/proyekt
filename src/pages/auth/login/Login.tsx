import img1 from "../../../assets/login.svg";
import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { useSignInMutation } from "../../../redux/api/user-api";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../../utils";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/slice/AuthSlice";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};
const info = () => {
  message.success("successfully logged");
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SingUp = () => {
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const [sigInRequest, { isError }] = useSignInMutation();
  if (isError) {
    message.error("error");
  }
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    sigInRequest(values)
      .unwrap()
      .then((res) => res)
      .then((data) => {
        info();
        dispatch(signIn(data.accessToken));

        navigete("/");
      });
    console.log(values);
  };
  return (
    <div className="grid grid-cols-1    bg-[#000]">
      <div className="container mx-auto   pt-[70px]">
        <div className="flex items-center  justify-center  lg:mb-[36px] md:mb-[26px] sm:mb-[20px] mb-[16px]">
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
          <p className="text-[28px] text-[#fff]">Snapgram</p>
        </div>
        <div className="w-[405px] lg:h-[410px] md:h-[530px]  sm:h-[530px] h-[471px]   m-auto px-[25px]">
          <p className="text-[30px] text-[#fff] font-[700] text-center">
            Log in to your account
          </p>
          <p className="text-[16px] text-[#7878A3] font-[400] text-center mt-[12px]">
            Welcome back! Please enter your details.
          </p>
          <Form
            className="w-full text-white"
            name="basic"
            layout="vertical"
            labelCol={{ span: 8, color: "white" }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label={<span style={{ color: "white" }}>Username</span>}
              style={{ color: "red" }}
              name="username"
              rules={[{ required: true, message: "Please input your email!" }]}
              className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]"
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label={<span style={{ color: "white" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
              className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]"
            >
              <Input.Password className="w-full " />
            </Form.Item>

            <Form.Item className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]">
              <Button
                onClick={Loading}
                className="w-full text-whit"
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <Button className=" lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px] lg:max-w-[351px]">
            <FcGoogle className="text-[18px]" />
            Sign up with Google
          </Button>
          <div className="flex items-center justify-center mt-2">
            <p className="text-[#EFEFEF] text-[14px]">Don’t have an account?</p>
            <Link to={"/auth/singUp"}>
              <p className="text-[#877EFF] text-[15px]">SingIn</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
