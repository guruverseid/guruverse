'use client'
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();

  return (
    <div className="w-full h-auto mx-auto relative z-10 lg:pb-44 pb-64 lg:-mb-72 -mb-80 ">
      <img src="/backgrounds/bg-home.svg" className="w-full lg:max-w-full max-w-lg   h-auto object-cover lg:flex lg:absolute hidden z-0 bottom-0" />
      <img src="/backgrounds/bg-home-mobile.svg" className="w-full lg:max-w-full max-w-lg   h-full object-cover flex absolute lg:hidden z-0 " />

      <div className="flex w-full lg:flex-row flex-col justify-between items-center lg:pl-32 pl-0 relative z-10 pb-72 lg:-mt-12 -mt-0">
        <div className="lg:pl-10 px-10 lg:w-1/2 lg:-mt-0 -mt-16 relative z-10 lg:order-1 order-2">
          <p className="lg:text-5xl text-4xl lg:pr-0 px-0 lg:pt-0 pt-10  font-bold mb-4 text-brand">
            Semesta Guru Kompeten,&nbsp;
            
            Sejahtera, dan Bahagia
          </p>
          <p className="lg:text-xl text-lg mb-4 text-brand-light relative z-10 lg:px-10 px-0">Guruverse.ID adalah ruang semesta bagi guru Indonesia untuk terhubung, bertumbuh, dan berdaya.</p>
          <button className="relative z-10 h-12 px-10 rounded-3xl  ml-10 mx-auto  cursor-pointer bg-gradient-to-r from-secondary to-primary" onClick={() => router.push("/about-us")}>
            <span className="text-white font-semibold text-xl">Learn More</span>
          </button>
        </div>
        <div className="relative z-10 lg:w-1/2 w-4/6 lg:order-2 order-1">
          <img src="/svg/thumb1.svg" className="w-full h-auto" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center relative z-10 lg:-mt-44 -mt-28 pb-44">
        <p className="font-bold lg:text-4xl text-3xl mb-4 text-center relative z-10 lg:px-0 px-10 text-white">Pilar Utama Guruverse.ID</p>
        <p className="lg:text-lg text-md lg:text-center text-justify relative z-10 text-white  lg:px-0 px-8">Membangun ekosistem pendidikan yang memberdayakan guru secara kompetensi, ekonomi, dan spiritual sebagai fondasi peradaban yang berkelanjutan</p>
        <div className="flex lg:flex-row flex-col w-full lg:gap-20 gap-10 lg:px-10 px-5  justify-center items-center relative z-10">
          <div className="lg:w-1/4 w-5/6 mt-10 relative" onClick={() => router.push("/guru-kompeten")}>
            <img src="/svg/kompeten.svg" className="lg:w-full w-full h-1/2" />
            <div className="absolute z-10 lg:bottom-56 bottom-48 ">
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold">Guru</span><br />
              <br />
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold mt-4">Kompeten</span>
            </div>
            <div className="bg-brand w-full lg:min-h-60 min-h-60 h-auto rounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="lg:mt-10 mt-4 lg:text-lg text-md text-white  lg:pt-0 pt-10">Kami memfasilitasi pengembangan kompetensi guru melalui platform digital dan pelatihan terpadu.</p>
              <button><img src="/images/forward.png" className=" rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 justify-self-end mr-4 cursor-pointer " /></button>
            </div>
          </div>
          <div className="lg:w-1/4 w-5/6 lg:mt-10 mt-0 relative" onClick={() => window.open("https://sharinghappiness.org/profile/1650733")}>
            <img src="/svg/sejahtera.svg" className="lg:w-full w-full h-1/2 pb-4" />
            <div className="absolute z-10 lg:bottom-56 bottom-56 ">
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold">Guru</span><br />
              <br />
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold mt-4">Sejahtera</span>
            </div>
            <div className="bg-brand w-full lg:minh-60 rounded-3xl min-h-72  Jrounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="lg:mt-4 mt-8 lg:text-lg mb-2 text-md text-white">Kami mengupayakan kesejahteraan ekonomi guru melalui pendekatan filantropi, literasi finansial, dan usaha lainnya dengan prinsip gotong royong.</p>
              <button><img src="/images/forward.png" className=" rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 justify-self-end mr-4 cursor-pointer " /></button>
            </div>
          </div>
          <div className="lg:w-1/4 w-5/6 lg:mt-10 mt-2  relative " onClick={() => window.open("https://www.instagram.com/ceriatraining?igsh=dHl3ZG5nM3E4MTFo")}>
            <img src="/svg/bahagia.svg" className="lg:w-full w-full h-1/2 pb-4 pt-4" />
            <div className="absolute z-10 lg:bottom-52 bottom-48 ">
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold">Guru</span><br />
              <br />
              <span className="bg-primary pl-4 pr-10 pt-4 pb-3 text-white lg:text-3xl text-2xl font-bold mt-4">Bahagia</span>
            </div>
            <div className="bg-brand w-full lg:minh-60 min-h-60 h-auto rounded-3xl  bottom-0 lg:px-8 lg:pt-8 lg:pb-4 px-4 py-2 justify-between absolute flex flex-col">
              <p className="lg:mt-8 mt-8 mb-4 lg:text-lg text-md text-white">Kami menghadirkan kebahagiaan guru dalam ruang kebersamaan melalui Komunitas Guru Berdaya.</p>
              <button><img src="/images/forward.png" className=" rounded-full bg-body lg:px-4 lg:py-5 px-2 py-3 justify-self-end mr-4 cursor-pointer " /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}