import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStorage = create(
  persist(
    (set, get) => ({
      walletId: "",
      walletName: "",
      setWalletId: (val: string) => set({ walletId: val }),
      setWalletName: (val: string) => set({ walletName: val }),
    }),
    {
      name: "shared-storage",
    }
  )
);
