import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { AxiosError } from "axios";
import * as Cookie from "cookies-js";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import {
  BaseResponseDetailType,
  BaseResponseListType,
} from "@/type/shared.type";

export const usePostWallet = () => {
  const mutation = useMutation<any, Error, PostWalletType>({
    mutationFn: async (body: PostWalletType) => {
      const response = await fetcher.post("/wallet", body);
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

export const useGetWallet = (params: {
  page: number;
  per_page: number;
  program_id?: string;
}) => {
  const query = useQuery<BaseResponseListType<WalletType>>({
    queryKey: ["LIST_WALLET"],
    queryFn: async () => {
      const result = await fetcher.get("/wallet", { params });
      return result.data;
    },
  });

  return query;
};

export const useDeleteNews = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (id: string) => {
      const response = await fetcher.delete(`/news/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LIST_NEWS"] }); // Menggunakan invalidateQueries untuk memicu ulang query
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
      const message = error.response?.data.message || "Gagal login";

      notification.error({ message: message });
    }
  }, [mutation.status]);

  return mutation;
};
