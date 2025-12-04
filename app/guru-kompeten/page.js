"use client"; // Swiper must run on the client
import GuruverseSwiper from "../_components/swiper/swiper";

export default function Page() {
    return (
        <div className="bg-body w-full h-auto lg:pb-72 pb-40">
            <img src="/backgrounds/bg-guru-kompeten.svg" className="w-full lg:max-w-full max-w-lg   h-auto lg:absolute lg:flex hidden z-0"/>
            <img src="/backgrounds/bg-guru-kompeten-mobile.svg" className="w-full lg:max-w-full max-w-lg   h-auto absolute  pt-10 flex lg:hidden z-0"/>
            <div className="flex lg:flex-row flex-col lg:w-10/12 w-full  justify-between items-center mx-auto relative z-10">
                <div className="pl-2 lg:w-1/2 w-full lg:order-1 order-2">
                    <p className="lg:text-5xl text-xl ml-4 lg:ml-0 font-bold mb-4">
                        <span className="text-brand">Sabar ya, Guru Hebat!</span>
                        <br />
                        <span className="text-primary">Halaman Belum Siap Dimuat</span>
                    </p>
                </div>
                <div className="lg:w-1/2 w-full lg:mr-10 mr-0 rounded-2xl lg:order-2 order-1">
                    <GuruverseSwiper/>
                </div>
            </div>
        </div>
    );
}
