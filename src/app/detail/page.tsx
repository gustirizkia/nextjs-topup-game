import Image from "next/image";
import React, { useState } from "react";
import Game1 from "../../asset/home/game1.jpg";
import ListDetailGame from "../../components/ListDetailGame";
import axios from "axios";
import Cart from "@/components/Cart";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "FAST TOPUP | MOBILE LEGEND",
  description: "Topup Mudah, Cepat dan Terpercaya",
  openGraph: {
    images: Game1.src,
    description: "Topup Mudah, Cepat dan Terpercaya",
  },
};

export default async function page() {
  let data: any[] = [];
  await axios
    .get("https://api.escuelajs.co/api/v1/products")
    .then((ress) => {
      data = ress.data;
    })
    .catch((err) => {
      console.log("err", err);
    });

  return (
    <>
      <div className="px-3 md:px-32 mt-3">
        <div className="grid grid-flow-row grid-cols-12 gap-6">
          <div className="md:col-span-3 col-span-12">
            <div className="bg-white  rounded-lg relative">
              <div className="h-28 w-full bg-gradient-to-r from-cyan-500 to-primary rounded-t-lg absolute"></div>
              <div className="p-4 relative">
                <Image
                  src={Game1}
                  alt="Game"
                  className="rounded-lg"
                  style={{ objectFit: "cover", width: 100 }}
                />

                <h1 className="text-xl font-semibold mt-3">Mobile Legend</h1>
                <p className="text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi non eaque, deleniti quo ab doloremque nulla? Sapiente
                  aliquam distinctio expedita!
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:mb-20 mb-3">
            <div className="bg-white p-4 rounded-lg ">
              <h1 className="text-xl">Pilih Diamond</h1>
              <div className="mt-3">
                <ListDetailGame data={data} />
              </div>
            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
            <div className="">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
