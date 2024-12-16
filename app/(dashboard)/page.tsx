"use client";
import Navbar from "@/components/shared/navbar";
import Count from "@/components/home/count";
import React, { useEffect } from "react";
import ListTransaction from "@/components/home/list-transaction";
import BaseButton from "@/components/shared/base-button";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import FilterTransaction from "@/components/home/filter-transaction";
import { useStorage } from "@/stores/storage.stores";
import {
  useGetCountTransaction,
  useGetTransaction,
} from "@/hooks/transaction.hook";
import LoadingSkeleton from "@/components/home/loading-transaction";

const Home = () => {
  const router = useRouter();
  const { walletId }: any = useStorage();
  const { data: dataCountTransaction, refetch: refetchCountTransaction } =
    useGetCountTransaction({
      month: "12",
      year: "2024",
      wallet_id: walletId as string,
    });
  const { data, refetch, isFetching } = useGetTransaction({
    page: 1,
    per_page: 20,
    wallet_id: walletId,
  });

  console.log({ dataCountTransaction });

  useEffect(() => {
    refetch();
    refetchCountTransaction();
  }, [walletId]);

  return (
    <div className="space-y-6 relative">
      <Navbar />
      <FilterTransaction />
      <Count
        totalExpense={dataCountTransaction?.result.expense || 0}
        totalIncome={dataCountTransaction?.result.income || 0}
        totalMoney={dataCountTransaction?.result.money_total || 0}
      />
      {isFetching ? (
        <LoadingSkeleton />
      ) : (
        <ListTransaction data={(data?.result as any) || []} />
      )}
      <div className="fixed bottom-[80px]   w-[390px] flex justify-end ">
        <BaseButton
          type="primary"
          onClick={() => {
            router.push(`/${walletId}/create`);
          }}
          icon={<PlusOutlined />}
          shape="circle"
          size="large"
          className="z-50"
        />
      </div>
    </div>
  );
};

export default Home;
