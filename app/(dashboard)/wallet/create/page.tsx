"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import FormGenerator from "@/components/shared/form-genrator";
import { usePostWallet } from "@/hooks/wallet.hook";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
const CreateWallet = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { mutateAsync, status } = usePostWallet();
  const handleSubmit = async (val: any) => {
    await mutateAsync(val);
    // router.push("/wallet");
  };
  return (
    <div>
      <div className="flex items-center space-x-2">
        <ButtonBack route="/wallet" />
        <h3 className="text-xl my-4">Create Wallet</h3>
      </div>
      <FormGenerator
        form={form}
        id="form"
        disabled={status == "pending"}
        onSubmit={handleSubmit}
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
            name: "initial_balance",
            type: "number",
            label: "Initial Balance",
            placeholder: "Initial balance",
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
      <BaseButton
        type="primary"
        htmlType="submit"
        form="form"
        className="w-full"
        loading={status == "pending"}
      >
        Submit
      </BaseButton>
    </div>
  );
};

export default CreateWallet;
