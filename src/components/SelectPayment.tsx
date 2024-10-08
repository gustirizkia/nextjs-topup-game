"use client";
import { UsePaymentStore } from "@/zustand/Payment";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SelectPayment() {
  const usePayment = UsePaymentStore();
  const [Data, SetData] = useState([]);
  const [SelectData, SetSelectData] = useState("0");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((ress) => {
        SetData(ress.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleSelectPayment = (param: any) => {
    SetSelectData(param.id);
  };

  return (
    <>
      <div className="flex w-full flex-col border-opacity-50">
        <div className="divider">Pembayaran</div>
      </div>

      <div className="flex flex-wrap ">
        {Data.map((item: any, index) => {
          return (
            <div
              className={`bg-white border p-2 rounded mr-3 mb-3 cursor-pointer ${
                parseInt(item.id) === parseInt(SelectData)
                  ? "border-2 border-primary bg-primary bg-opacity-20"
                  : " "
              }`}
              key={index}
              onClick={() => handleSelectPayment(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="flex w-full flex-col border-opacity-50">
        <div className="divider">Akun</div>
      </div>
      <label className="input input-bordered rounded-full flex items-center gap-2">
        User ID
        <input type="text" className="grow" placeholder="01XXX" />
      </label>
      <label className="input input-bordered rounded-full flex items-center gap-2 mt-2">
        Zona ID
        <input type="text" className="grow" placeholder="01XXX" />
      </label>

      <div className="btn btn-primary mt-5 rounded-full w-full">
        Beli Sekarang
      </div>
    </>
  );
}
