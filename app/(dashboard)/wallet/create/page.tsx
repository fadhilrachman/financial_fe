"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import FormGenerator from "@/components/shared/form-genrator";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const CreateWallet = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <div className="flex items-center space-x-2">
        <ButtonBack route="/wallet" />
        <h3 className="text-xl my-4">Create Wallet</h3>
      </div>
      <FormGenerator
        form={form}
        id="form"
        onSubmit={() => {}}
        dataForm={[
          {
            name: "name",
            type: "text",
            label: "Wallet Name",
            placeholder: "Wallet name",
            rules: [
              {
                required: true,
                message: "This field is required",
              },
            ],
          },
          {
            name: "description",
            type: "textarea",
            label: "Wallet Description (optional)",
            placeholder: "Description",
          },
        ]}
      />
      <BaseButton type="primary" className="w-full">
        Submit
      </BaseButton>
    </div>
  );
};

export default CreateWallet;
