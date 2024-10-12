import img from "../../assets/sinp.png";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
type FieldType = {
  full_name?: string;
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
      <div className="container mx-auto">
        <div className="w-[405px] h-[592px]  mt-[216px] m-auto px-[25px]">
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
            style={{ maxWidth: 600, width: 530, color: "white" }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Name"
              name="full_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input className="w-full" />
            </Form.Item>
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>
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
            <Link to={"/login"}>
              <p className="text-[#877EFF] text-[15px]">Log in</p>
            </Link>
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
