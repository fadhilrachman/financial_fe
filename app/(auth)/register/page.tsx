"use client";
import BaseButton from "@/components/shared/base-button";
import FormGenerator from "@/components/shared/form-genrator";
import { Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-full px-4">
        <h2 className="text-2xl m-4 font-medium font-montserrat">Register</h2>
        <FormGenerator
          form={form}
          id="form"
          onSubmit={() => {}}
          dataForm={[
            {
              name: "email",
              type: "text",
              label: "Username",
              placeholder: "Username",
              rules: [
                {
                  required: true,
                  message: "This field is required",
                },
              ],
            },
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
            {
              name: "password",
              type: "password",
              label: "Confirm Password",
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
        <BaseButton type="primary" className="w-full" htmlType="submit">
          Submit
        </BaseButton>
        <small className="mt-2">
          Already have an account?{" "}
          <span
            onClick={() => {
              router.push("/login");
            }}
            className="text-blue-500 cursor-pointer font-semibold"
          >
            Login
          </span>
        </small>
      </div>
    </div>
  );
};

export default Register;
