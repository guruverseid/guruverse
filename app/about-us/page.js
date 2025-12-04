export default function Page() {

    return (
        <div className="bg-body w-full h-auto lg:pb-10 pb-44">
            <img src="/backgrounds/bg-about-us-mobile.svg" className="w-full lg:max-w-full max-w-lg   h-auto flex absolute lg:hidden z-0 pt-96 mt-36" />

            <p className="lg:text-4xl text-xl font-bold text-center mb-5 lg:mt-20 mt-8 text-primary z-10 relative w-full">Tentang Guruverse.ID</p>
            <p className="lg:text-lg text-sm lg:text-center text-justify lg:mb-20 mb-8 text-brand-light lg:mx-0 mx-10 z-10 relative">Di setiap peradaban besar, selalu ada peran guru yang bekerja dalam sunyi… <br />Menanam harapan, membentuk masa depan. </p>
            <div className=" w-full z-10 relative" >
                <img src="/backgrounds/bg-about-us.svg" className="w-full h-auto object-cover lg:flex lg:absolute hidden z-0" />
                {/* <div className="w-full from-primary bg-gradient-to-t to-body pb-16 z-10 relative"> */}
                <iframe className="w-10/12 h-96 mx-auto rounded-3xl z-10 relative lg:mb-24 mb-10" src="https://www.youtube.com/embed/S6OdEPdSyTQ?si=B3krmz5lQPsfAA13" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                {/* </div> */}

                <p className="lg:text-4xl text-xl font-bold text-center z-10 relative lg:text-white text-primary">
                    Cerita Kami
                </p>
                <div className="flex lg:flex-row flex-col justify-between items-center  lg:w-10/12 w-full  lg:mx-auto  lg:mt-10 mt-0  z-10 relative lg:px-0 px-4">
                    <p className="lg:text-lg text-sm lg:text-left text-justify lg:w-1/2 w-full mt-4 lg:mt-0  bg-primary rounded-3xl text-white lg:p-16 p-4 lg:order-1 order-2">
                        <span className="font-bold lg:text-xl text-lg">Guruverse.ID</span> bukan sekadar nama.Ia adalah manifestasi dari ekosistem yang dibangun oleh <span className="font-bold text-xl">ACF Eduhub</span>.<br />
                        Sebuah ruang di mana guru bertumbuh secara kompeten, sejahtera, dan bahagia. Menghadirkan kehangatan dalam kebersamaan,spiritualitas dalam setiap langkah,dan arah gerakan yang membumi, namun tetap visioner.
                        <br /><br />Kami mempunyai tujuan besar untuk membangun ekosistem pendidikan yang memberdayakan guru secara kompetensi, ekonomi, dan spiritual sebagai fondasi peradaban yang berkelanjutan.
                    </p>
                    <img src="/svg/about-us-thumb.svg" className="lg:w-1/3 w-full mx-auto h-auto mr-16 lg:order-2 order-1 " />
                </div>
            </div>
        </div>
    );
}
