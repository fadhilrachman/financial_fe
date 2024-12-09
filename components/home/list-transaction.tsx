import {
  HeatMapOutlined,
  PlusCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import BaseButton from "../shared/base-button";

const ListTransaction = () => {
  return (
    <div className="space-y-8">
      {[1, 2, 3, 5].map((val) => {
        return (
          <div className="text-sm space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-base">12 September 2024</h3>
              <BaseButton
                type="primary"
                icon={<PlusOutlined />}
                shape="circle"
                size="small"
              />
            </div>
            <div className="spac">
              {[1, 2, 3, 4, 5].map((val, key) => {
                return (
                  <div key={key} className="hover:opacity-100 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
                          <HeatMapOutlined />
                        </div>
                        <div>
                          <h4 className="font-semibold">Kopi</h4>
                          <p className="text-sm text-neutral-400 max-w-[250px] line-clamp-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fuga iste molestiae rem debitis ut laudantium
                            odio eveniet 11amet sed cum?
                          </p>
                        </div>
                      </div>
                      <h3 className="font-bold">Rp 12.000</h3>
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
