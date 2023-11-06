import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Inter } from "next/font/google";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const FormLogin: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    form.resetFields();
    message.success("Login Success!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 24 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <span
        className={` ${inter.variable}  text-[#8A92A6] text-[16px] font-normal mb-[10px] `}
      >
        Username
      </span>
      <Form.Item<FieldType>
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <span
        className={` ${inter.variable}  text-[#8A92A6] text-[16px] font-normal mb-[10px] `}
      >
        Username
      </span>
      <Form.Item<FieldType>
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        // valuePropName="checked"
        // wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>
          <span
            className={` ${inter.variable}  cursor-pointer  text-[#8A92A6] text-[16px] font-normal `}
          >
            Remember me?
          </span>
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          className="bg-[#1677ff] py-[8px[ px-[16px]"
          htmlType="submit"
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
