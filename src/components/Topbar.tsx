import Image from "next/image";
import React from "react";
import Logo from "../asset/logo.jpeg";
export default function Topbar() {
  return (
    <>
      <div className=" py-5  flex items-center justify-between md:px-32 px-3 bg-white">
        <div className="relative h-12 w-20 ">
          <Image src={Logo} alt="Logo" fill style={{ objectFit: "contain" }} />
        </div>
        <div className="md:flex hidden">
          <label className="input input-bordered flex items-center gap-2 rounded-full">
            <input type="text" className="grow " placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
}
