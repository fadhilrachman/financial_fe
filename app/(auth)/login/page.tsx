"use client";
import BaseButton from "@/components/shared/base-button";
import FormGenerator from "@/components/shared/form-genrator";
import { useLogin } from "@/hooks/auth.hook";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { mutate, status } = useLogin();

  const handleSubmit = (val: any) => {
    mutate(val);
  };
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-full px-4">
        <h2 className="text-2xl m-4 font-medium font-montserrat">Login</h2>
        <FormGenerator
          form={form}
          id="form"
          onSubmit={handleSubmit}
          disabled={status == "pending"}
          dataForm={[
            {
              name: "email",
              type: "text",
              label: "Email",
              placeholder: "Email",
              rules: [
                {
                  required: true,
                  message: "This field is required",
                },
              ],
            },
            {
              name: "password",
              type: "password",
              label: "Password",
              placeholder: "Password",
              rules: [
                {
                  required: true,
                  message: "This field is required",
                },
              ],
            },
          ]}
        />
        <BaseButton
          type="primary"
          loading={status == "pending"}
          className="w-full"
          htmlType="submit"
          form="form"
        >
          Submit
        </BaseButton>
        <small className="mt-2">
          Don't have an account?{" "}
          <span
            onClick={() => {
              router.push("/register");
            }}
            className="text-blue-500 cursor-pointer font-semibold"
          >
            Register
          </span>
        </small>
      </div>
    </div>
  );
};

export default Login;
