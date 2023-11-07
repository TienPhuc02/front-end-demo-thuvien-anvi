"use client";
import FormRegister from "@/components/AuthPage/FormRegister";
import HeaderLogo from "@/components/AuthPage/HeaderLogo";
import {
  Button,
  Checkbox,
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Tooltip,
  Typography,
  message,
} from "antd";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-robot",
});
const { Option } = Select;
type FieldType = {
  userName?: string;
  remember?: boolean;
  firstName?: string;
  lastName?: string;
  password?: string;
  passwordConfirm?: string;
  emailAddress?: string;
  phoneNumber?: string;
  gender?: string;
};
const SignUpPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const formRef = React.useRef<FormInstance>(null);
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        formRef.current?.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        formRef.current?.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        formRef.current?.setFieldsValue({ note: "Hi there!" });
        break;
      default:
        break;
    }
  };
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const dataFormLogin = {
      userName: values.userName,
      password: values.password,
    };
    form.resetFields();
    message.success("Login Success!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
  const onFill = () => {
    formRef.current?.setFieldsValue({
      userName: "123456789",
      password: "password",
      passwordConfirm: "passwordConfirm",
      firstName: "Đỗ",
      lastName: "Nam",
      emailAddress: "địachỉ@gmail.com",
      phoneNumber: "12345678910",
      gender: "male",
    });
  };
  return (
    <main className={roboto.className}>
      <div className="container-main-sign-up-page grid grid-cols-2">
        <div className="content-left-sign-up-page relative min-h-screen">
          <Image
            layout="fill"
            objectFit="cover"
            alt="image-content right"
            src="/GraphicSide.png"
          />
        </div>
        <div className="container-right-sign-up-page mx-auto  max-w-[450px] max-h-[650px] w-full h-full my-auto">
          <div className="content-right-sign-up-page ">
            <HeaderLogo
              title={"Đăng Ký"}
              description={" Create your Hope UI account."}
            />
            <div className="content-right-form-sign-up">
              <FormRegister />
              <div
                className={` ${roboto.variable} font-medium navigate-sign-up-form-login text-center`}
              >
                You have an account?{" "}
                <span
                  className="text-[#3a57e8] cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Click here to sign in.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
