import type { FormProps } from "antd";
import { Button, Form, Input, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../redux/api/user-api";
import { useEffect } from "react";
import { Loading } from "../../../utils";

type FieldType = {
  full_name?: string;
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};
const info = () => {
  message.success("successfully registered");
};
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SingUp = () => {
  const navigete = useNavigate();
  const [signUpRequest, { data, isSuccess, isError }] =
    useRegisterUserMutation();

  if (isError) {
    message.error("error");
  }
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signUpRequest(values);
  };
  useEffect(() => {
    if (isSuccess) {
      info();
      navigete(`/auth/login`);
      console.log(data);
      localStorage.setItem("token", data.accessToken);
    }
  }, [isSuccess]);

  return (
    <div className="grid grid-cols-1 w-full bg-[#000] pb-[30px] mt-[39px]">
      <div className="container mx-auto">
        <div className="w-[405px] h-[530px]  mt-[0px] m-auto px-[25px] relative">
          <p className="text-[30px] text-[#fff] font-[700] text-center">
            Create a new account
          </p>
          <p className="text-[16px] text-[#7878A3] font-[400] text-center mt-[12px]">
            To use snapgram, Please enter your details.
          </p>
          <Form
            className="w-full text-white"
            name="basic"
            layout="vertical"
            labelCol={{ span: 8, color: "white" }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, color: "white" }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label={<span style={{ color: "white" }}>Name</span>}
              name="full_name"
              rules={[{ required: true, message: "Please input your name!" }]}
              className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]"
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item<FieldType>
              label={<span style={{ color: "white" }}>Username</span>}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
              className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]"
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item<FieldType>
              label={<span style={{ color: "white" }}>Email</span>}
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
              className="lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px]"
            >
              <Input className="w-full" />
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
                className=" text-whit w-full  "
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <Button className=" text-[#1F1F22] font-[600] lg:w-[530px] md:w-[400px] sm:w-[350px] w-[320px] lg:max-w-[351px]">
            <FcGoogle className="text-[18px]" />
            Sign up with Google
          </Button>

          <div className="flex items-center justify-center mt-2">
            <p className="text-[#EFEFEF] text-[14px]">Don’t have an account?</p>
            <Link to={"/auth/login"}>
              <p className="text-[#877EFF] text-[15px]">Log in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
