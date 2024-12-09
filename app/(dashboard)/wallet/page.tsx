"use client";
import BaseButton from "@/components/shared/base-button";
import CountTransaction from "@/components/wallet/count-transaction";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import React from "react";

const Wallet = () => {
  const router = useRouter();
  return (
    <div className="mt-4 space-y-4">
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
