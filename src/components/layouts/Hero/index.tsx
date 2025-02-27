import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";
import { useEffect, useState } from "react";
export default function Hero() {
  const [heroImage, setHeroImage] = useState(1);
  // useEffect(() => {
  //   const heroIndex = heroImage
  //   const interval = setInterval(() => {
  //     if (heroIndex === 5) {
  //       setHeroImage(1);
  //       return;
  //     }
  //     setHeroImage(heroIndex + 1);
  //   }, 5000);
  // });

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover flex items-end px-2 pb-8 animate__animated animate__fadeIn animate__slow after:content-[''] after:absolute after:bottom-0 after:top-1/2 after:left-0 after:right-0 after:bg-gradient-to-b after:from-transparent after:to-black duration-1000"
      style={{ backgroundImage: `url("/image/hero/${heroImage}.jpg")` }}
    >
      <div className="w-full z-10">
        <h1 className="text-6xl mb-2 font-bold text-custom-green font-poppins animate__animated animate__fadeInLeft  animate__delay-1s animate">
          JKT48
        </h1>
        <p className="w-[60%] mb-10 text-sm font-extralight text-slate-300 tracking-[.1px] font-poppins animate__animated animate__fadeInLeft animate__delay-1s animate__slow flex gap-3">
          <span className="tracking-[-2px]  text-custom-green">————</span>
          JKT48 is a captivating musical sensation that blends the allure of
          Japanese pop culture with Indonesian charm. Originating from the
          renowned AKB48 concept, JKT48 has carved its own path as Indonesia's
          beloved idol group, enchanting audiences with its energetic
          performances and infectious melodies.
        </p>
        <div className="flex px-10 justify-between w-full font-urbanist font-light text-slate-300 animate__animated animate__fadeIn animate__delay-2s animate__slower">
          <Link
            href="#theater"
            className="flex gap-1 duration-300 items-center group"
          >
            <h1>Upcoming Theater</h1>
            <IoIosArrowRoundDown className="text-xl hidden group-hover:block duration-300" />
          </Link>
          <Link
            href="#product"
            className="flex flex-row-reverse gap-1 duration-300 items-center group"
          >
            <h1>Latest Product</h1>
            <IoIosArrowRoundDown className="text-xl hidden group-hover:block duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
