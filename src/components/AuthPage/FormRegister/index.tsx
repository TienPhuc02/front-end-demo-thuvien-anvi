import axios from "axios";
import {
  Button,
  Col,
  Form,
  FormInstance,
  Row,
  Select,
  Tooltip,
  Typography,
  message,
  Input,
  Checkbox,
} from "antd";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
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
const FormRegister = () => {
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
    const dataFormRegister = {
      userName: values.userName,
      remember: values.remember,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      emailAddress: values.emailAddress,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
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

    // React.useEffect(() => {
    //   form.validateFields({ validateOnly: true }).then(
    //     () => {
    //       setSubmittable(true);
    //     },
    //     () => {
    //       setSubmittable(false);
    //     }
    //   );
    // }, [values]);

    useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("Authorization", "Basic ZGV2YWRtaW46MTIzMTIz");
      myHeaders.append("Accept", "*/*");
      myHeaders.append("Host", "vls.vietlacapi.com");
      myHeaders.append("Connection", "keep-alive");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow" as RequestRedirect,
      };

      fetch("https://vls.vietlacapi.com/api/v1/App/user", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }, []);
    return (
      <Button
        type="primary"
        className="bg-[#1677ff] mr-[10px]"
        htmlType="submit"
        disabled={!submittable}
      >
        <span
          className={` navigate-sign-up-form-login text-center`}
        >
          Đăng Ki
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
    <div>
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
        <Row gutter={[8, 8]}>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Họ của Bạn
            </span>
            <Tooltip title="Hãy nhập họ của bạn!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Tên của Bạn
            </span>
            <Tooltip title="Hãy nhập tên của bạn!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your lastName!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Mật Khẩu
            </span>
            <Tooltip title="Hãy nhập số điện thoại!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Xác nhận mật khẩu
            </span>
            <Tooltip title="Hãy Xác nhận mật khẩu!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="passwordConfirm"
              rules={[
                {
                  required: true,
                  message: "Please input your passwordConfirm!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Địa chỉ Email
            </span>
            <Tooltip title="Hãy nhập Địa chỉ Email!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="emailAddress"
              rules={[
                {
                  required: true,
                  message: "Please input your emailAddress!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={12}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Số Điện Thoại
            </span>
            <Tooltip title="Hãy nhập số điện thoại!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phoneNumber!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <span
              className={` ${roboto.variable} font-light text-[black] text-[16px]  mb-[10px]  mr-[10px]`}
            >
              Giới tính
            </span>
            <Tooltip title="Hãy chọn giới tính của bạn!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item name="gender" rules={[{ required: true }]}>
              <Select
                placeholder="Select a option and change input text above"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
              </Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.gender !== currentValues.gender
              }
            >
              {({ getFieldValue }) =>
                getFieldValue("gender") === "other" ? (
                  <Form.Item name="gender" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                ) : null
              }
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item<FieldType>
              name="remember"
              valuePropName=""
              className="flex justify-center"
            >
              <Checkbox>
                <span
                  className={`${roboto.variable} font-light cursor-pointer  text-[black] text-[16px]  `}
                >
                  Remember me?
                </span>
              </Checkbox>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item className="flex justify-center">
              <SubmitButton form={form} />
              <Button htmlType="reset" className="mr-[10px]">
                Đặt lại
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Form mẫu
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormRegister;
