"use client";
import CreateCategory from "@/components/category/create-category";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import FormGenerator from "@/components/shared/form-genrator";
import IconComponent from "@/components/shared/icon-component";
import { useGetCategory } from "@/hooks/category.hook";
import {
  useGetDetailTransaction,
  usePostTransaction,
  useUpdateTransaction,
} from "@/hooks/transaction.hook";
import { PlusOutlined, UserAddOutlined } from "@ant-design/icons";
import { Form } from "antd";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
const UpdateTransaction = () => {
  const router = useRouter();
  const { wallet_id } = useParams();
  const [modal, setModal] = useState({ createCategory: false });
  const [form] = Form.useForm();

  const { mutateAsync, status } = useUpdateTransaction({
    transaction_id: wallet_id as string,
  });
  const {
    data,
    isFetching,
    refetch,
    status: statusCategory,
    failureCount,
    successCount,
  } = useGetCategory({
    page: 1,
    per_page: 100,
    type: form.getFieldValue("type"),
  });

  const {
    data: dataTransaction,
    status: statusTransaction,
    isFetching: isFetchingTransaction,
  } = useGetDetailTransaction({
    transaction_id: wallet_id as string,
  });

  const finallyData = dataTransaction?.result;

  const handleSubmit = async (val: any) => {
    await mutateAsync({ ...val });
    router.push("/");
  };
  useEffect(() => {
    if (successCount > 1) {
      refetch();
      form.setFieldValue("category_id", undefined);
    }
  }, [Form.useWatch("type", form)]);

  useEffect(() => {
    if (successCount == 1) {
      refetch();
    }
  }, [successCount]);
  useEffect(() => {
    if (!isFetchingTransaction) {
      form.setFieldValue("type", finallyData?.type);
      form.setFieldValue("category_id", finallyData?.category.id);
      form.setFieldValue("date", dayjs(finallyData?.date));
      form.setFieldValue("count", finallyData?.count);
      form.setFieldValue("description", finallyData?.description);
    }
  }, [isFetchingTransaction]);
  return (
    <div>
      <div className="flex items-center space-x-2">
        <ButtonBack route="/" />
        <h3 className="text-xl my-4">Update Record</h3>
      </div>
      {/* {successCount} */}
      <FormGenerator
        form={form}
        id="form"
        disabled={status == "pending" && isFetchingTransaction}
        onSubmit={handleSubmit}
        dataForm={[
          {
            name: "type",
            type: "select",
            label: "Record Type",
            placeholder: "Record Type",

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
            name: "category_id",
            type: "select",
            label: "Category",
            placeholder: "Category",
            loading: isFetching,
            // disabled: isFetching || !form.getFieldValue("type"),
            dropdownRender: (menu) => {
              return (
                <div className="z-10">
                  {menu}

                  <BaseButton
                    icon={<PlusOutlined />}
                    type="primary"
                    className="w-full mt-2"
                    htmlType="button"
                    onClick={() => {
                      setModal((p) => ({ ...p, createCategory: true }));
                    }}
                  >
                    Add Category
                  </BaseButton>
                </div>
              );
            },
            options: data?.result?.map((val) => {
              return {
                label: (
                  <div className="flex items-center space-x-1">
                    {" "}
                    <IconComponent iconKey={val.icon} />
                    <span>{val?.name}</span>
                  </div>
                ),
                value: val.id,
              };
            }),
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
            name: "count",
            type: "numberwithcurrency",
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
            name: "description",
            type: "textarea",
            label: "Description (optional)",
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

      <CreateCategory
        isOpen={modal.createCategory}
        onClose={() => {
          setModal((p) => ({ ...p, createCategory: false }));
        }}
      />
    </div>
  );
};

export default UpdateTransaction;
