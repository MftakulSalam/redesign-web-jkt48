import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1
        className="font-poppins w-fit text-3xl mx-auto font-bold mt-24 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-custom-green to-blue-600 from-30%" data-aos="flip-left" data-aos-duration="800"
        id="product"
      >
        See What's New
      </h1>
      <div className="flex py-5 px-32 gap-10 relative mb-24">
        <div className="grid grid-cols-3 gap-2 max-w-4xl mx-auto basis-2/3 relative">
          <div className="row-span-1" data-aos="flip-up" data-aos-duration="1000">
            <img
              src="/latestProduct/product1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-2 col-span-2" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
            <img
              src="/latestProduct/product2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
            <img
              src="/latestProduct/product3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
            <img
              src="/latestProduct/product4.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
            <img
              src="/latestProduct/product5.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="row-span-1 col-span-1" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="300">
            <img
              src="/latestProduct/product6.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="basis-1/3">
          <h1 className="font-semibold text-4xl text-custom-green font-poppins" data-aos="fade-left" data-aos-duration="500">
            Marsha's Birthday T-shirt
          </h1>
          <h2 className="text-2xl my-5 font-urbanist" data-aos="fade-left" data-aos-duration="500" data-aos-delay="100">Rp. 195.000</h2>
          <h3 className="text-sm text-slate-300 font-light font-urbanist tracking-[.5px]" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
            Mari rayakan ulang tahun oshi kamu dengan memakai T-Shirt yang
            didesain sendiri oleh membernya! Periode pemesanan akan dimulai 02
            Desember 2023 pukul 15:00 WIB. Kamu bisa order produk ini di
            official Tokopedia JKT48. Pasti seru bisa kembaran baju dengan
            Marsha!
          </h3>
          <h4 className="text-sm text-slate-300 font-light my-3 font-urbanist" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
            Pemesanan hanya berlaku sampai tanggal 11 Desember 2023 pukul 17:00
            WIB
          </h4>
          <hr />
          <div className="flex gap-2 my-10 font-urbanist" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
            <h5 className="p-1.5 mr-10">Size</h5>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hver transition-shadow">
              S
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              M
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              L
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              XL
            </button>
            <button className="p-1.5 text-center hover:text-custom-green active:text-custom-green focus:text-custom-green hover:cursor-pointer hover:text-shadow-custom-hover transition-shadow">
              XXL
            </button>
          </div>
          <hr />
          <button className="mt-10 w-full h-fit border border-custom-green py-2 text-center text-custom-green font-light ease-in-out duration-700 font-urbanist hover:bg-gradient-to-r hover:from-custom-green hover:to-blue-600 from-30% hover:border-black hover:text-black">
            Go to Payment
          </button>
          <div className="flex gap-2 justify-between py-4 px-8 border border-custom-green rounded-md mt-48 font-urbanist">
            <Link href={"https://www.tokopedia.com/officialjkt48"}>
              <h1 className="text-xs font-light text-start border-e hover:text-custom-green hover:cursor-pointer">
                JKT48 Tokopedia
              </h1>
            </Link>
            <Link href={"/shop"}>
              <h1 className="text-xs font-light text-center hover:text-custom-green hover:cursor-pointer block">
                Check Another Product
              </h1>
            </Link>
            <Link href={"https://shopee.co.id/officialjkt48"}>
              <h1 className="text-xs font-light text-end border-s hover:text-custom-green hover:cursor-pointer">
                JKT48 Shopee
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
