"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import FormGenerator from "@/components/shared/form-genrator";
import { UserAddOutlined } from "@ant-design/icons";
import { Form } from "antd";
import React from "react";

const CreateTransaction = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <div className="flex items-center space-x-2">
        <ButtonBack route="/" />
        <h3 className="text-xl my-4">Create Record</h3>
      </div>
      <FormGenerator
        form={form}
        id="form"
        onSubmit={() => {}}
        dataForm={[
          {
            name: "category",
            type: "select",
            label: "Category",
            placeholder: "Category",
            options: [
              {
                label: (
                  <div>
                    <UserAddOutlined /> Expense
                  </div>
                ),
                value: "expense",
              },
              {
                label: (
                  <div>
                    <UserAddOutlined /> Income
                  </div>
                ),
                value: "income",
              },
            ],
            rules: [
              {
                required: true,
                message: "This field is required",
              },
            ],
          },
          {
            name: "name",
            type: "number",
            label: "Count",
            placeholder: "Count",
            rules: [
              {
                required: true,
                message: "This field is required",
              },
            ],
          },
          {
            name: "date",
            type: "date",
            label: "Date",
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
            label: "Description (optional)",
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

export default CreateTransaction;
