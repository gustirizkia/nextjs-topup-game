"use client";

import { useCartStore } from "@/zustand/Cart";

export const handleSelectData = (item: any) => {
  const storeCart = useCartStore();
  console.log("item", item);
};
