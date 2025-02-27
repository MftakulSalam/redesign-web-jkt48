import Image from "next/image";
import React from "react";

export default function FrontSide(props: { nama: string; baseColor: string }) {
  const { nama, baseColor } = props;
  return (
    <div
      className={`front peer-checked:rotate-y-180 border-${baseColor} border rounded-2xl absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-zinc-950 hover:cursor-pointer shadow-xl shadow-${baseColor} duration-700 backface-hidden`}
    >
      <Image
        width={256}
        height={361}
        className={`w-4/5 border-r h-full border-${baseColor}`}
        src={"/member/webp/" + nama.toLowerCase().replace(/ /g, "_") + ".webp"}
        alt={nama}
      />
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-transparent w-60 h-60 flex items-center justify-center rotate-90">
        <h1
          className={`text-xl font-bold text-${baseColor} uppercase text-nowrap font-poppins`}
        >
          {nama}
        </h1>
      </div>
    </div>
  );
}
