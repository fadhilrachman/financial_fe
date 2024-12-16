import {
  HeatMapOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Divider, Tag } from "antd";
import React from "react";
import BaseButton from "../shared/base-button";
import { GroupingByDateTransactionType } from "@/type/transaction.type";
import { formatRupiah } from "@/lib/utils";
import moment from "moment-timezone";
import { useRouter } from "next/navigation";
import IconComponent from "../shared/icon-component";
moment.locale("id");

const ListTransaction = ({ data }: { data: GroupingByDateTransactionType }) => {
  const finallyResult = Object.keys(data);
  const router = useRouter();
  const color = {
    income: "+",
    expense: "-",
  };

  return (
    <div className="space-y-8">
      {finallyResult.map((val) => {
        return (
          <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base">
                {moment(val).format("DD MMMM YYYY")}
              </h3>
              {/* <BaseButton
                type="primary"
                icon={<PlusOutlined />}
                shape="circle"
                size="small"
              /> */}
            </div>
            <div className="spac">
              {data[val].map((item, itemKey) => {
                return (
                  <div
                    key={itemKey}
                    onClick={() => {
                      router.push(`/transaction/${item.id}`);
                    }}
                    className="hover:opacity-100 cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
                          <IconComponent iconKey={item.category.icon} />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {item.category.name}
                          </h4>
                          <p className="text-sm text-neutral-400 max-w-[250px] line-clamp-1">
                            {item.description || "-"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold">
                          <span className="text-xl mr-0.5">
                            {color[item.type]}
                          </span>
                          {formatRupiah(item.count)}
                        </h3>
                        {/* <Tag color={color[item.type]}>#f50</Tag> */}
                      </div>
                    </div>
                    <Divider className="my-4" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListTransaction;
