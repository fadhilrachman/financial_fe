import { DownOutlined, HeatMapOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const CountTransaction = () => {
  const [isOpen, setIsOpen] = useState({
    expense: false,
    income: false,
  });
  return (
    <div>
      <div className="space-y-2">
        <h3 className="font-medium text-base">Annual summary 2024</h3>
        <div>
          <div>
            <div
              className="hover:opacity-100 cursor-pointer"
              onClick={() => {
                setIsOpen((p) => ({ ...p, expense: !p.expense }));
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
                    <HeatMapOutlined />
                  </div>
                  <div>
                    <h4 className="font-semibold">Total Expense</h4>

                    <h3 className="">Rp 12.000</h3>
                  </div>
                </div>
                <IoIosArrowDown />
              </div>
              <Divider className="my-2" />
            </div>
            {isOpen.expense && (
              <div className="ml-8 mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, key) => {
                  return (
                    <div key={key}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className=" text-sm">Januari</h4>
                          <p className="text-xs max-w-[220px] text-neutral-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusamus, tenetur.
                          </p>
                        </div>
                        <h3 className="font-bold text-sm">Rp 12.000</h3>
                      </div>
                      <Divider className="my-2" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="hover:opacity-100 cursor-pointer"
            onClick={() => {
              setIsOpen((p) => ({ ...p, income: !p.income }));
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <div className="bg-textColor p-2 flex items-center justify-center w-[40px] h-[40px] rounded-xl text-background">
                  <HeatMapOutlined />
                </div>
                <div>
                  <h4 className="font-semibold">Total Income</h4>

                  <h3 className="">Rp 12.000</h3>
                </div>
              </div>
              <IoIosArrowDown />
            </div>
            <Divider className="my-2" />
          </div>
          {isOpen.income && (
            <div className="ml-8 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, key) => {
                return (
                  <div key={key}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className=" text-sm">Januari</h4>
                        <p className="text-xs max-w-[220px] text-neutral-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusamus, tenetur.
                        </p>
                      </div>
                      <h3 className="font-bold text-sm">Rp 12.000</h3>
                    </div>
                    <Divider className="my-2" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountTransaction;
