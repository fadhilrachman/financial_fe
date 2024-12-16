"use client";
import BaseButton from "@/components/shared/base-button";
import ButtonBack from "@/components/shared/button-back";
import IconComponent from "@/components/shared/icon-component";
import { handleTrigerModalDelete } from "@/components/shared/modal-delete";
import {
  useDeleteTransaction,
  useGetDetailTransaction,
} from "@/hooks/transaction.hook";
import { formatRupiah } from "@/lib/utils";
import { DeleteFilled, EditFilled, HeatMapOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import moment from "moment";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const DetailTransaction = () => {
  const router = useRouter();
  const { transaction_id } = useParams();
  const { mutateAsync, status } = useDeleteTransaction({
    transaction_id: transaction_id as string,
  });
  const { data, isFetching } = useGetDetailTransaction({
    transaction_id: transaction_id as string,
  });
  const handleDelete = async () => {
    await mutateAsync();
    Modal.destroyAll();
    router.push("/");
  };
  const finallyData = data?.result;
  const items = [
    {
      label: "Amount",
      value: formatRupiah(finallyData?.count as number),
    },
    {
      label: "Record Type",
      value: <span className="capitalize"> {finallyData?.type}</span>,
    },
    {
      label: "Date",
      value: moment(finallyData?.date).format("DD MMMM YYYY"),
    },
    {
      label: "Wallet",
      value: finallyData?.wallet.name,
    },
    {
      label: "Description",
      value: finallyData?.description,
    },
  ];

  return (
    <div>
      {" "}
      <div className="flex items-center space-x-2">
        <ButtonBack route="/" />
        <h3 className="text-xl my-4">Detail Recorded</h3>
      </div>
      {isFetching ? (
        "loading..."
      ) : (
        <div>
          <div className="flex items-start space-x-4">
            <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
              <IconComponent iconKey={finallyData?.category?.icon as string} />
            </div>
            <div className="w-full mt-2 ">
              <div className="flex w-full justify-between items-center">
                <h4 className="font-semibold text-xl">
                  {finallyData?.category?.name}
                </h4>
                <div className="flex space-x-2">
                  <BaseButton
                    icon={<EditFilled className="text-yellow-500" />}
                    size="small"
                    onClick={() => {
                      router.push(`/${transaction_id}/update`);
                    }}
                  />
                  <BaseButton
                    icon={<DeleteFilled className="text-red-500" />}
                    size="small"
                    onClick={() => {
                      handleTrigerModalDelete({
                        loading: status == "pending",
                        onDelete: handleDelete,
                      });
                    }}
                  />
                </div>
              </div>{" "}
              <div className="mt-3 space-y-4 ml w-full text-sm">
                {items.map((val) => {
                  return (
                    <div className="flex border-b pb-1 w-full">
                      <p className="w-[100px] text-neutral-400">{val.label}</p>
                      <p>: {val.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTransaction;
