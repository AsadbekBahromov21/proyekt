import img from "../../assets/sinp.png";
import img1 from "../../assets/login.svg";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const SingUp = () => {
  return (
    <div className="grid grid-cols-2 w-full bg-[#000]">
      <div className="container mx-auto pt-[180px]">
        <div className="flex items-center  justify-center  mb-[36px]">
          <img className="w-[30px] h-[30px]" src={img1} alt="" />
          <p className="text-[28px] text-[#fff]">Snapgram</p>
        </div>
        <div className="w-[405px] h-[592px]  m-auto px-[25px]">
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
            style={{ maxWidth: 600, width: 530, color: "white" }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Email"
              className=" text-white "
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className="w-full " />
            </Form.Item>

            <Form.Item>
              <Button
                className="w-full text-whit"
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <Button className="w-full text-[#1F1F22] font-[600    ]">
            <FcGoogle className="text-[18px]" />
            Sign up with Google
          </Button>
          <div className="flex items-center justify-center mt-2">
            <p className="text-[#EFEFEF] text-[14px]">Don’t have an account?</p>
            <p className="text-[#877EFF] text-[15px]">SingUp</p>
          </div>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SingUp;
