import { DownOutlined, FilterFilled, SmileOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";
import React from "react";
import BaseButton from "../shared/base-button";
import { PiWallet } from "react-icons/pi";
import { useStorage } from "@/stores/storage.stores";
import { useGetWallet } from "@/hooks/wallet.hook";

const FilterTransaction = () => {
  const { walletId, walletName, setWalletName, setWalletId }: any =
    useStorage();
  const { data } = useGetWallet({ page: 1, per_page: 100 });
  const itemsWallet = data?.result?.map((val) => ({
    key: val.id,
    label: (
      <div
        className=" w-full"
        onClick={() => {
          setWalletId(val?.id);
          setWalletName(val?.name);
        }}
      >
        {val?.name}
      </div>
    ),
  }));

  return (
    <div className=" flex justify-between items-center">
      <Dropdown
        menu={{
          items: itemsWallet,
          selectable: true,
          selectedKeys: [walletId],
        }}
      >
        <a onClick={(e) => e.preventDefault()} className="cursor-pointer">
          <Space>
            <PiWallet />
            {walletName}
            <DownOutlined className="text-xs" />
          </Space>
        </a>
      </Dropdown>

      <BaseButton type="primary" icon={<FilterFilled />}>
        Filter
      </BaseButton>
    </div>
  );
};

export default FilterTransaction;
