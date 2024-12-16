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
import { PostCategoryType } from "@/type/category.type";

export const usePostCategory = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<any, Error, PostCategoryType>({
    mutationFn: async (body: PostCategoryType) => {
      const response = await fetcher.post("/category", body);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["LIST_CATEGORY"] }); // Menggunakan invalidateQueries untuk memicu ulang query
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

export const useGetCategory = (params: {
  page: number;
  per_page: number;
  type?: string;
}) => {
  const query = useQuery<BaseResponseListType<any>>({
    queryKey: ["LIST_CATEGORY"],
    queryFn: async () => {
      const result = await fetcher.get("/category", { params });
      return result.data;
    },
  });

  return query;
};
