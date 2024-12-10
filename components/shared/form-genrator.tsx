import { usePostFile } from "@/hooks/file.hook";
import { DeleteFilled, FileFilled, InboxOutlined } from "@ant-design/icons";
import {
  Form,
  FormInstance,
  Input,
  DatePicker,
  notification,
  Spin,
  Checkbox,
  Select,
} from "antd";
import { Rule } from "antd/es/form";
import { FormLayout } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { UploadChangeParam, UploadFile } from "antd/es/upload";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
import { TbTrashFilled } from "react-icons/tb";

export interface DataFormType {
  type:
    | "text"
    | "email"
    | "file"
    | "textarea"
    | "checkbox"
    | "date"
    | "number"
    | "select";
  name: string;
  rules?: Rule[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  bottomCustom?: React.ReactNode;
  addonBefore?: React.ReactNode;
  options?: { value: string; label: React.ReactNode }[];
}
export interface FormGeneratorType {
  form: FormInstance;
  dataForm: DataFormType[];
  id: string;
  className?: string;
  layout?: FormLayout;
  onSubmit: (val: any) => any;
  disabled?: boolean;
}

const FormGenerator = ({
  form,
  dataForm,
  onSubmit,
  disabled = false,
  id,
  layout = "vertical",
  className,
}: FormGeneratorType) => {
  const { mutateAsync, status: statusUpload, data: dataImg } = usePostFile();

  const handleChangeUploadFile = async (
    e: UploadChangeParam<UploadFile<any>>,
    name: string
  ) => {
    const file = e.file.originFileObj;
    if (e.file.status == "done") {
      console.log({ e });
      const isFileAccepted =
        file?.type === "image/jpeg" || file?.type === "image/png";

      if (!isFileAccepted) {
        notification.error({
          message: "The file type cannot be uploaded!",
        });
        return null;
      }
      const result = await mutateAsync({ file: e.file.originFileObj });
      form.setFieldValue(name, result.result);
    }
  };

  const handleDeleteFile = (name: string) => {
    form.setFieldValue(name, undefined);

    console.log({ cuy: form.getFieldValue(name) });
  };
  return (
    <Form
      form={form}
      name="validateOnly"
      layout={layout}
      onFinish={onSubmit}
      disabled={disabled}
      className={`${className}`}
      id={id}
    >
      {dataForm.map((val, key) => {
        if (val.type == "file") {
          const fileUrl = form.getFieldValue(val.name);

          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              {fileUrl ? (
                <div className="px-3 flex items-center text-textColor py-2 border rounded-md border-borderColor">
                  <div className="flex items-center space-x-1 flex-1">
                    <FileFilled />
                    <a
                      href={fileUrl.url}
                      target="_blank"
                      className="text-sm text-blue-500 underline line-clamp-2"
                    >
                      {fileUrl.name}
                    </a>
                  </div>
                  <div className="border">
                    <DeleteFilled
                      className="text-red-500"
                      onClick={() => {
                        handleDeleteFile(val.name);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <Spin size="large" spinning={statusUpload == "pending"}>
                  <Dragger
                    multiple={false}
                    disabled={statusUpload == "pending"}
                    showUploadList={false}
                    onChange={(e) => {
                      handleChangeUploadFile(e, val.name);
                    }}
                  >
                    <>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text !text-textColor">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint ">Maximum size 5mb</p>
                    </>
                  </Dragger>
                </Spin>
              )}
            </Form.Item>
          );
        }

        if (val.type == "checkbox") {
          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              <Checkbox>Checkbox</Checkbox>
            </Form.Item>
          );
        }

        if (val.type == "select") {
          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              <Select
                options={val.options}
                placeholder={val.placeholder}
                disabled={val?.disabled}
                allowClear
              />
            </Form.Item>
          );
        }
        if (val.type == "text") {
          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              <Input
                placeholder={val.placeholder}
                disabled={val?.disabled}
                readOnly={val?.readOnly}
                addonBefore={val.addonBefore}
                size="large"
                type="text"
              />
            </Form.Item>
          );
        }

        if (val.type == "number") {
          return (
            <>
              <Form.Item
                name={val.name}
                label={val.label}
                rules={val?.rules}
                key={key}
              >
                <Input
                  placeholder={val.placeholder}
                  disabled={val?.disabled}
                  readOnly={val?.readOnly}
                  addonBefore={val.addonBefore}
                  size="large"
                  type="number"
                />
              </Form.Item>
              {val?.bottomCustom}
            </>
          );
        }

        if (val.type == "date") {
          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              <DatePicker
                className="w-full"
                placeholder={val.placeholder || "Pilih tanggal"}
                size="large"
                disabled={val.disabled}
              />
              {/* {val?.bottomCustom} */}
            </Form.Item>
          );
        }
        if (val.type == "textarea") {
          return (
            <Form.Item
              name={val.name}
              label={val.label}
              rules={val?.rules}
              key={key}
            >
              <TextArea
                size="large"
                placeholder={val.placeholder}
                disabled={val?.disabled}
                readOnly={val?.readOnly}
              />
            </Form.Item>
          );
        }
      })}
    </Form>
  );
};

export default FormGenerator;
