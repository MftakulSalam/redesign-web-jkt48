import React from "react";

export default function SmallCard(props: {
  item: { image: string; tanggal: string; judul: string; desc: string };
  index: number;
}) {
  const { item, index } = props;
  return (
    <div key={index}>
      <div
        className={
          "flex mb-3 cursor-pointer" +
          (index === 0 ? "" : " mt-3")
        }
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="ease-out-cubic"
        data-aos-delay={index * 100}
      >
        <img
          src={item.image}
          className="rounded-lg w-1/3 h-fit"
          alt=""
        />
        <div className="flex flex-col ml-4 overflow-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-xs font-medium text-custom-green bg-black px-1 py-0.5">
              Event
            </h1>
            <h2 className="text-xs font-poppins text-slate-800">
              {item.tanggal}
            </h2>
          </div>
          <h1 className="text-black font-bold text-lg text-ellipsis w-full whitespace-nowrap overflow-hidden">
            {item.judul}
          </h1>
          <h2 className="text-xs text-slate-900 text-light">{item.desc}</h2>
        </div>
      </div>
      {index !== 3 && <hr className="h-0.5 bg-black" />}
    </div>
  );
}
