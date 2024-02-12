import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get started" }) => {
  return (
    <>
      <button className="flex items-center justify-end w-fit h-fit py-[5px] px-2 bg-white text-black rounded-full text-base font-medium">
        {title}
        <IoIosReturnRight />
      </button>
    </>
  );
};

export default Button;
