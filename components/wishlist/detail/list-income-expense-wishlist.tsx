import BaseButton from "@/components/shared/base-button";
import { HeatMapOutlined, PlusOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";

const ListIncomeExpenseWishlist = () => {
  return (
    <div className="text-sm space-y-8">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-base mb-3">Uang Masuk</h3>
        </div>
        <div className="spac">
          {[1, 2, 3, 4, 5].map((val, key) => {
            return (
              <div key={key} className="hover:opacity-100 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div>
                      <h4 className="font-semibold">12 September 2024</h4>
                      <p className="text-sm text-neutral-400 max-w-[250px] line-clamp-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga iste molestiae rem debitis ut laudantium odio
                        eveniet 11amet sed cum?
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
      <div>
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-base mb-3">Uang Keluar</h3>
        </div>
        <div className="spac">
          {[1, 2, 3, 4, 5].map((val, key) => {
            return (
              <div key={key} className="hover:opacity-100 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <div>
                      <h4 className="font-semibold">12 September 2024</h4>
                      <p className="text-sm text-neutral-400 max-w-[250px] line-clamp-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fuga iste molestiae rem debitis ut laudantium odio
                        eveniet 11amet sed cum?
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
    </div>
  );
};

export default ListIncomeExpenseWishlist;
