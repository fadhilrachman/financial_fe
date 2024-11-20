"use client";
import FilterDonation from "@/components/cms/donation/filter-donation";
import LayoutCms from "@/components/shared/layout-cms";
import { FilterFilled, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Card, Input } from "antd";
import React, { useState } from "react";

const Donation = () => {
  const [modal, setModal] = useState({ filter: false });
  const donations = [
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
    {
      name: "Fadhil Rahman",
      phone: "+6288102207883",
      message: "Sehat Selalu kak",
      amount: "Rp 20.000",
      time: "7 menit lalu",
    },
  ];

  return (
    <LayoutCms>
      <div className="space-y-4">
        {" "}
        <div className="flex space-x-4">
          <Input
            placeholder="Cari donasi"
            allowClear
            prefix={<SearchOutlined />}
          />
          <Button
            type="primary"
            onClick={() => {
              setModal((p) => ({ ...p, filter: true }));
            }}
            icon={<FilterFilled />}
          >
            Filter
          </Button>
        </div>
        <div className="  px-2 md:px-4 py-4 rounded-md">
          <div className="space-y-2">
            <div className="divide-y divide-gray-700">
              {donations.map((donation, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-semibold">
                    {donation.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">
                          {donation.name}
                        </h3>
                        <p className="text-sm text-blue-400">
                          {donation.phone}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <button className="px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md transition duration-300 ease-in-out">
                          Donasi Sijum
                        </button>
                        <span className="text-xs text-gray-400 mt-1">
                          {donation.time}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Pesan: {donation.message}
                    </p>
                    <p className="text-sm font-medium text-white mt-1">
                      {donation.amount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <FilterDonation
          isOpen={modal.filter}
          onClose={() => {
            setModal((p) => ({ ...p, filter: false }));
          }}
        />
      </div>
    </LayoutCms>
  );
};

export default Donation;
