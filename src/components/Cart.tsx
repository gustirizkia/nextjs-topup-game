"use client";

import { UseCartStore } from "@/zustand/Cart";
import React, { useState } from "react";
import SelectPayment from "./SelectPayment";

export default function Cart() {
  const { items } = UseCartStore();

  return (
    <>
      <div className="bg-white p-3 rounded-lg mb-12">
        <div className="font-semibold text-xl mb-3">Detail Pesanan</div>
        {items.map((item: any, index: any) => {
          return (
            <div className="mb-3 " key={index}>
              <div className="text-sm">{item.id} Diamond</div>
              <div className="text-sm font-bold">Rp. {item.price}</div>
            </div>
          );
        })}

        <SelectPayment />
      </div>
    </>
  );
}
