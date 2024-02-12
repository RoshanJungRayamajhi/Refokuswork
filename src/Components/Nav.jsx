import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="nav bg-[#18181b] z-[1] fixed w-full px-[5%] py-6 flex  items-center justify-between border-b-[1.5px] border-zinc-700">
      <div className="nleft flex items-center gap-24">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />

        <div className="Link flex gap-14">
          {["Home", "Work", "Culture", "", "News"].map((items, i) =>
            items.length === 0 ? (
              <span
                key={i}
                className=" inline-block w-[1px] h-6 bg-zinc-500"
              ></span>
            ) : (
              <a
                key={i}
                className=" font-regular text-sm flex items-center gap-1"
                href="#"
              >
                {i === 1 && (
                  <span
                    style={{ textShadow: " 0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-blue-300"
                  ></span>
                )}
                {items}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Nav;
