"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import FormGenerator from "@/components/shared/form-genrator";
import { UserAddOutlined } from "@ant-design/icons";
import { Form } from "antd";
import React from "react";

const CreateWishList = () => {
  const [form] = Form.useForm();
  return (
    <div>
      <div className="flex items-center space-x-2">
        <ButtonBack route="/profile" />
        <h2 className="text-2xl m-4 font-medium font-montserrat">
          Wishlist Create
        </h2>
      </div>
      <FormGenerator
        form={form}
        id="form"
        onSubmit={() => {}}
        dataForm={[
          {
            name: "name",
            type: "text",
            label: "Wishlist Name",
            placeholder: "Wishlist Name",
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
            label: "Initial balance",
            placeholder: "Initial balance",
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
            label: "Date Reached",
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
      <BaseButton type="primary" className="w-full" htmlType="submit">
        Submit
      </BaseButton>
    </div>
  );
};

export default CreateWishList;
