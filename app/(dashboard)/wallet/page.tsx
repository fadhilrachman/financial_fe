"use client";
import BaseButton from "@/components/shared/base-button";
import Navbar from "@/components/shared/navbar";
import CountTransaction from "@/components/wallet/count-transaction";
import ListWallet from "@/components/wallet/list-wallet";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import React from "react";

const Wallet = () => {
  const router = useRouter();
  return (
    <div className="space-y-4">
      <Navbar />
      <ListWallet />
      <div className="flex justify-end">
        <BaseButton
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => {
            router.push("/wallet/create");
          }}
        >
          Create Wallet
        </BaseButton>
      </div>
      <CountTransaction />
    </div>
  );
};

export default Wallet;
