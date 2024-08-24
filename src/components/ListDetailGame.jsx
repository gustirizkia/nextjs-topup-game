"use client";

import Image from "next/image";
import Diamond from "../asset/diamond.webp";
import { UseCartStore } from "@/zustand/Cart";
import { useState } from "react";

const ListDetailGame = ({ data = [] }) => {
  const StoreCart = UseCartStore();
  const [SelectData, SetSelectData] = useState(null);

  const handleSelectData = (param) => {
    SetSelectData(param.id);
    StoreCart.setItems(param);
  };

  return (
    <>
      <div className="grid grid-flow-row grid-cols-12 gap-3 md:gap-6">
        {data.map((item, index) => (
          <div
            className={`md:col-span-4 col-span-6 bg-white border p-3 rounded  cursor-pointer ${
              parseInt(SelectData) === parseInt(item.id)
                ? "bg-primary bg-opacity-20 border-primary"
                : ""
            }`}
            key={index}
            onClick={() => handleSelectData(item)}
          >
            <div className="flex items-center">
              <div className="mr-3">
                <Image src={Diamond} style={{ width: 20 }} alt="FAST TOPUP" />
              </div>
              <div className="">
                <div className="font-semibold md:text-base text-sm">
                  {item.id} Diamond
                </div>
                <div className="md:text-base text-sm">Rp. {item.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListDetailGame;
