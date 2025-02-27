import React from "react";

export default function FooterCopyright() {
  return (
    <div className="border-t-2 border-zinc-800 w-full h-10 py-3 mt-12 flex ">
      <div className="flex justify-between w-full text-xs md:text-base font-poppins">
        <h1 className="text-zinc-800 font-light w-fit"> Jakarta, Indonesia</h1>
        <h2 className="text-zinc-800 font-light w-fit">
          Copyright © June 2024 | Muhammad Miftakul Salam
        </h2>
      </div>
    </div>
  );
}
