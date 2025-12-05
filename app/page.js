'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full h-auto mx-auto relative z-10 pb-56 pt-16  ">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="hidden lg:block w-full h-full">
          <Image
            src="/backgrounds/bg-home.svg"
            alt="background"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>
        
        <div className="lg:hidden w-full h-full">
          <Image
            src="/backgrounds/bg-home-mobile.svg"
            alt="background mobile"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden lg:block w-full lg:h-96 h-0 bottom-0 bg-secondary absolute -z-20">

        </div>
      <div className="flex w-full lg:flex-row flex-col justify-between items-center lg:pl-32 pl-0 relative z-10 pb-72 lg:-mt-12 -mt-0">
        <div className="lg:pl-10 px-10 lg:w-1/2 lg:-mt-0 -mt-16 relative z-10 lg:order-1 order-2 flex flex-col">
          <p className="lg:text-5xl text-4xl lg:pr-0 px-0 lg:pt-0 pt-10  font-bold mb-4 text-brand">
            Semesta Kompetensi,<br />
            Untuk Guru Indonesia
          </p>
          <p className="lg:text-xl text-lg mb-4 text-brand-light relative z-10 lg:pr-10 px-0">Guruverse.ID Adalah ruang semesta bagi guru Indonesia <br />terhubung, bertumbuh, dan kompeten.</p>
          <button className="relative z-10 h-12 px-10 rounded-3xl mx-auto  lg:ml-10   cursor-pointer bg-gradient-to-r from-secondary to-primary" onClick={() => router.push("/about-us")}>
            <span className="text-white font-semibold text-xl ">Learn More</span>
          </button>
        </div>
        <div className="relative z-10 lg:w-1/2 w-5/6 lg:order-2 order-1 lg:pb-[50%] pb-[80%]" >
          <Image
            src="/svg/thumb1.svg"
            alt="background"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center relative z-10 lg:-mt-44 -mt-28 pb-44">
        <p className="font-bold lg:text-4xl text-3xl mb-4 text-center relative z-10 lg:px-0 px-10 text-white">Pilar Utama Guruverse.ID</p>
        <p className="lg:text-lg text-md lg:text-center text-justify relative z-10 text-white  lg:px-0 px-8 lg:w-3/6">Membangun ekosistem pendidikan yang mendukung peningkatan kompetensi guru secara pedagogik, profesional, personal, sosial, digital, dan inovatif.</p>
        <div className="flex lg:flex-row flex-col w-full lg:gap-20 gap-10 lg:px-10 px-5  justify-center items-center relative z-10">
          <div className="lg:w-1/4 w-5/6 mt-10 relative" onClick={() => router.push("/under-construction")}>
            {/* <img src="/svg/kompeten.svg" className="lg:w-full w-full h-1/2" /> */}
            <div className="pb-[160%] h-1/2 w-full">
              <Image
                src="/svg/kompeten.svg"
                alt="background"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
            <div className="bg-brand w-full lg:min-h-60 min-h-60 h-auto rounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="bg-gradient-to-r from-primary to-secondary lg:px-4 px-2 lg:pt-4 pt-2 lg:pb-3 pb-2 lg:-mt-14 -mt-8 text-white lg:text-3xl text-xl font-bold text-center rounded-xl ">Learning <br /> Partner</p>
              <p className="lg:mt-3 mb-4 mt-4 lg:text-lg lg:text-md text-sm text-white text-justify">Ruang belajar digital terstruktur untuk meningkatkan kompetensi guru secara berkelanjutan.</p>
              <button className="rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 ml-auto mr-2 cursor-pointer ">
                <div className=" w-8 h-6 relative">
                  <Image
                    src="/images/forward.png"
                    alt="background"
                    fill
                    priority
                    className="object-fill object-bottom"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 w-5/6 lg:mt-10 mt-0 relative" onClick={() => router.push("/under-construction")}>
            {/* <img src="/svg/sejahtera.svg" className="lg:w-full w-full h-1/2 pb-4" /> */}
            <div className="pb-[160%] h-1/2 w-full">
              <Image
                src="/svg/sejahtera.svg"
                alt="background"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
            <div className="bg-brand w-full lg:min-h-60 rounded-3xl min-h-72  Jrounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="bg-gradient-to-r from-primary to-secondary lg:px-4 px-2 lg:pt-4 pt-2 lg:pb-3 pb-2 lg:-mt-14 -mt-8 text-white lg:text-3xl text-xl font-bold text-center rounded-xl">Teaching <br /> Partner</p>

              <p className="lg:mt-3 mt-4 mb-5 lg:text-lg lg:text-md text-sm text-white text-justify">Sistem & Pelatihan pengelolaan pembelajaran agar guru lebih efektif, kreatif, dan berpusat pada murid.</p>
              <button className="rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 ml-auto mr-2 cursor-pointer ">
                <div className=" w-8 h-6 relative">
                  <Image
                    src="/images/forward.png"
                    alt="background"
                    fill
                    priority
                    className="object-fill object-bottom"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="lg:w-1/4 w-5/6 lg:mt-10 mt-2  relative " onClick={() => router.push("/under-construction")}>
            {/* <img src="/svg/bahagia.svg" className="lg:w-full w-full h-1/2 pb-4 pt-4" /> */}
            <div className="pb-[160%] h-1/2 w-full">
              <Image
                src="/svg/bahagia.svg"
                alt="background"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
            <div className="bg-brand w-full lg:minh-60 min-h-60 h-auto rounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="bg-gradient-to-r from-primary to-secondary lg:px-4 px-2 lg:pt-4 pt-2 lg:pb-3 pb-2 lg:-mt-14 -mt-8 text-white lg:text-3xl text-xl font-bold text-center rounded-xl">Digital & Innovation Partner</p>

              <p className="lg:mt-3 mt-4 mb-4 lg:text-lg lg:text-md text-sm text-white text-justify">Penguatan literasi digital dan inovasi pembelajaran untuk menghadapi tantangan era modern.</p>
              <button className="rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 ml-auto mr-2 cursor-pointer ">
                <div className=" w-8 h-6 relative">
                  <Image
                    src="/images/forward.png"
                    alt="background"
                    fill
                    priority
                    className="object-fill object-bottom"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}