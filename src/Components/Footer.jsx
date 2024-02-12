import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-white pb-10">
      <div className=" max-w-screen-xl mx-auto py-3 flex gap-52 ">
        <div className=" basis-1/2">
          <h1 className=" text-[11rem] font-semibold  tracking-tighter">
            refokus.
          </h1>
        </div>
        <div className=" basis-1/2 flex gap-8">
          <div className="pt-12 basis-1/3 ">
            <h1 className="pb-9 text-zinc-600">Socials</h1>
            {["Instagram", "Twitter", "linkiden"].map((items, index) => (
              <a key={index} className="pb-2 block text-zinc-600 text-sm">
                {items}
              </a>
            ))}
          </div>
          <div className="mt-12 basis-1/3 ">
            <h1 className="pb-9  text-zinc-600"> Sitestamp </h1>
            {["Home", "Work", "Carrers", "Contact"].map((items, index) => (
              <a key={index} className="pb-2 block text-zinc-100 text-sm">
                {items}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col items-end">
            <p className=" text-center  mt-20 normal-case text-sm font-semibold">
              Refokus is the digital agency which is inspired by all of you
            </p>

            <img
              className="mt-6"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
