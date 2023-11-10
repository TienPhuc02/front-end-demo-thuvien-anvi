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
import { getAPIRegister } from "@/service/api";
import { Body, getClient } from "@tauri-apps/api/http";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300"],
  variable: "--font-robot",
});
const { Option } = Select;
type FieldType = {
  userName?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
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
      case "Male":
        formRef.current?.setFieldsValue({ note: "Hi, man!" });
        break;
      case "Female":
        formRef.current?.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "Other":
        formRef.current?.setFieldsValue({ note: "Hi there!" });
        break;
      default:
        break;
    }
  };
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const dataFormRegister = {
      userName: values.phoneNumber,
      firstName: values.firstName,
      name: values.name,
      lastName: values.lastName,
      password: values.password,
      passwordConfirm: values.passwordConfirm,
      emailAddress: values.emailAddress,
      phoneNumber: values.phoneNumber,
      gender: values.gender,
    };
    console.log(
      "🚀 ~ file: index.tsx:69 ~ onFinish ~ dataFormRegister:",
      dataFormRegister
    );
    const client = await getClient();
    const res = await client.post("https://dam.vietlac.com/api/v1/User", {
      body: Body.json({
        userName: dataFormRegister.userName,
        firstName: dataFormRegister.firstName,
        name: dataFormRegister.name,
        lastName: dataFormRegister.lastName,
        password: dataFormRegister.password,
        passwordConfirm:dataFormRegister.passwordConfirm,
        emailAddress: dataFormRegister.emailAddress,
        phoneNumber:dataFormRegister.phoneNumber,
        gender: dataFormRegister.gender,
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization-Token":
          "ZGV2YWRtaW46MjY3OTk1YmQxMDdiYTllNTIzNGJlMzUzYmQ1MWU3ODU=",
      },
      type: "Json",
      payload: null,
    });
    console.log("🚀 ~ file: index.tsx:91 ~ onFinish ~ res:", res);

    // form.resetFields();
    message.success("Register Success!!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [submittable, setSubmittable] = React.useState(false);
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
          Đăng Ki
        </span>
      </Button>
    );
  };
  const onFill = () => {
    formRef.current?.setFieldsValue({
      userName: "0888363810",
      password: "password",
      passwordConfirm: "password",
      firstName: "Đỗ",
      name: "Nam",
      lastName: "Nam",
      emailAddress: "địachỉ@gmail.com",
      phoneNumber: "0888363810",
      gender: "Male",
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
              Ten
            </span>
            <Tooltip title="Hãy nhập teen của bạn!!">
              <Typography.Link href="#API">Giải thích?</Typography.Link>
            </Tooltip>
            <Form.Item<FieldType>
              name="name"
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
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
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
