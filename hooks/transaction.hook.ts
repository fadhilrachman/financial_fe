import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { notification } from "antd";
import {
  BaseResponseDetailType,
  BaseResponseListType,
} from "@/type/shared.type";
import { PostTransactionType, TransactionType } from "@/type/transaction.type";
import moment from "moment-timezone";
function groupDataTransaction(data: TransactionType[]) {
  return data.reduce((result: any, item) => {
    const day = moment(item.date).tz("Asia/Jakarta").format("YYYY-MM-DD");
    if (!result[day]) {
      result[day] = [];
    }
    result[day].push(item);
    return result;
  }, {});
}
export const usePostTransaction = () => {
  const mutation = useMutation<any, Error, PostTransactionType>({
    mutationFn: async (body: PostTransactionType) => {
      const response = await fetcher.post("/transaction", body);
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: data.message });
    }

    if (status == "error") {
      const error = mutation.error as AxiosError<any>;
      console.log({ error });
      const message =
        error.response?.data.message || error.response?.data?.error;

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};

export const useGetTransaction = (params: {
  page: number;
  per_page: number;
  wallet_id?: string;
}) => {
  const query = useQuery<BaseResponseListType<TransactionType>>({
    queryKey: ["LIST_TRANSACTION"],
    queryFn: async () => {
      const result = await fetcher.get("/transaction", { params });

      return {
        pagination: result.data.pagination,
        result: groupDataTransaction(result?.data?.result),
      };
    },
  });

  return query;
};

export const useGetDetailTransaction = (params: { transaction_id: string }) => {
  const query = useQuery<BaseResponseDetailType<TransactionType>>({
    queryKey: ["DETAIL_TRANSACTION"],
    queryFn: async () => {
      const result = await fetcher.get(
        `/transaction/${params.transaction_id}`,
        { params }
      );
      return result.data;
    },
  });

  return query;
};
export const useDeleteTransaction = ({
  transaction_id,
}: {
  transaction_id: string;
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error>({
    mutationFn: async () => {
      const response = await fetcher.delete(`/transaction/${transaction_id}`);
      return response.data;
    },
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["LIST_NEWS"] }); // Menggunakan invalidateQueries untuk memicu ulang query
    // },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: data.message });
    }

    if (status == "error") {
      const error = mutation.error as AxiosError<any>;
      console.log({ error });
      const message = error.response?.data.message || "Gagal login";

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};

export const useUpdateTransaction = ({
  transaction_id,
}: {
  transaction_id: string;
}) => {
  const mutation = useMutation<any, Error, PostTransactionType>({
    mutationFn: async (body: PostTransactionType) => {
      const response = await fetcher.put(
        `/transaction/${transaction_id}`,
        body
      );
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: data.message });
    }

    if (status == "error") {
      const error = mutation.error as AxiosError<any>;
      console.log({ error });
      const message =
        error.response?.data.message || error.response?.data?.error;

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};
