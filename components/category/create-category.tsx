import { UserAddOutlined } from "@ant-design/icons";
import { Form, Modal } from "antd";
import React from "react";
import FormGenerator from "../shared/form-genrator";
import BaseButton from "../shared/base-button";
import { usePostCategory } from "@/hooks/category.hook";
import * as VscIcons from "react-icons/si";
import * as FaIcons from "react-icons/fa6";
import IconComponent from "../shared/icon-component";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const iconKeys = Object.keys(VscIcons).slice(0, 10000);
const iconKeysFa = Object.keys(FaIcons).slice(0, 10000);
const finallyIcons = [...iconKeysFa, ...iconKeys];

const CreateCategory = ({ isOpen, onClose }: Props) => {
  const { mutateAsync, status } = usePostCategory();
  const [form] = Form.useForm();
  const handleSubmit = async (val: any) => {
    console.log({ val });
    await mutateAsync(val);
    form.resetFields();
    onClose();
  };
  return (
    <Modal
      title="Create Category"
      footer={false}
      open={isOpen}
      onCancel={onClose}
      className="!z-50"
    >
      <FormGenerator
        form={form}
        id="formCategory"
        disabled={status == "pending"}
        onSubmit={handleSubmit}
        dataForm={[
          {
            name: "name",
            type: "text",
            label: "Category Name",
            placeholder: "Food/coffe",
            rules: [
              {
                required: true,
                message: "This field is required",
              },
            ],
          },
          {
            name: "type",
            type: "select",
            label: "Category Type",
            placeholder: "Category Type",

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
            name: "icon",
            type: "select",
            label: "Icon",
            placeholder: "Icon",

            options: finallyIcons.map((iconKey) => {
              return {
                label: (
                  <div className="flex items-center space-x-1">
                    {" "}
                    <IconComponent iconKey={iconKey} />
                    <span>{iconKey}</span>
                  </div>
                ),
                value: iconKey,
              };
            }),
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
        htmlType="submit"
        form="formCategory"
        loading={status == "pending"}
        className="w-full"
      >
        Submit
      </BaseButton>
    </Modal>
  );
};

export default CreateCategory;
