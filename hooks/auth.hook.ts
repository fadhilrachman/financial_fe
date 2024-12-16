import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useEffect } from "react";
import { AxiosError } from "axios";
import Cookie from "cookies-js";
import { useRouter } from "next/navigation";
import { notification } from "antd";

export const useLogin = () => {
  const navigate = useRouter();
  const mutation = useMutation<any, Error, FormData>({
    mutationFn: async (body: FormData) => {
      const response = await fetcher.post("/login", body);
      return response.data;
    },
  });

  useEffect(() => {
    const status = mutation.status;
    if (status == "success") {
      const { data } = mutation;
      notification.success({ message: "Login Sukses" });
      Cookie.set(process.env.COOKIE_NAME || "", data?.result?.token);
      navigate.push("/");
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
