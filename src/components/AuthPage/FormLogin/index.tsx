import React from "react";
import {
  Button,
  Checkbox,
  Form,
  FormInstance,
  Input,
  Tooltip,
  Typography,
  message,
} from "antd";
import { Inter, Roboto } from "next/font/google";
import { getAPILogin } from "@/service/api";
type FieldType = {
  userName?: string;
  password?: string;
  remember?: boolean;
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-robot",
});
const FormLogin: React.FC = () => {
  const [form] = Form.useForm();
  const formRef = React.useRef<FormInstance>(null);
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    form.resetFields();
    message.success("Login Success!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      userName: "123456789",
      password: "password",
    });
  };
  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
    // Watch all values
    const values = Form.useWatch([], form);

    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
    }, [values]);

    return (
      <Button
        type="primary"
        className="bg-[#1677ff] mr-[10px]"
        htmlType="submit"
        disabled={!submittable}
      >
        <span className={` navigate-sign-up-form-login text-center`}>
          Đăng nhập
        </span>
      </Button>
    );
  };
  return (
    <Form
      form={form}
      ref={formRef}
      name="basic"
      labelCol={{ span: 24 }}
      initialValues={{ remember: false }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <span
        className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
      >
        Username
      </span>
      <Tooltip title="Hãy nhập số điện thoại!!">
        <Typography.Link href="#API">Giải thích?</Typography.Link>
      </Tooltip>
      <Form.Item<FieldType>
        name="userName"
        rules={[
          { required: true, message: "Please input your userName!" },
          // {
          //   pattern: /^[0-9]{10,11}$/,
          //   message: "Username must be a number with 10 to 11 digits!",
          // },
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item>
      <span
        className={` ${roboto.variable} font-light text-[#000000] text-[16px] mb-[10px] mr-[10px] `}
      >
        Password
      </span>
      <Tooltip title="Hãy nhập mật khẩu!!">
        <Typography.Link href="#API">Giải thích?</Typography.Link>
      </Tooltip>
      <Form.Item<FieldType>
        name="password"
        rules={[
          { required: true, message: "Please input your password!" },
          // {
          //   pattern: /^.{8,}$/, // Ensure at least 8 characters
          //   message: "Password must be at least 8 characters long!",
          // },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="">
        <Checkbox>
          <span
            className={`${roboto.variable} font-light cursor-pointer  text-[black] text-[16px]  `}
          >
            Remember me?
          </span>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <SubmitButton form={form} />
        <Button htmlType="reset" className="mr-[10px]">
          Đặt lại
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Form mẫu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
