"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import AncestorSection from "../components/AncestorSection";

export default function Dynasty() {
    const scrollToNext = () => {
        const container = document.querySelector('.snap-y');
        if (container) {
            container.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full bg-black snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth flex flex-col gap-12 md:gap-32">
            <Navbar />

            {/* Section 1: Hero - Identical to About Page */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-4 text-center">
                <div className="max-w-5xl w-full mx-auto">
                    <div className="flex flex-col items-center gap-1">
                        {/* Crest Image */}
                        <div className="relative w-40 h-56 md:w-80 md:h-80">
                            <Image
                                src="/images/about/hofHP (1)-1.png"
                                alt="Crest"
                                fill
                                className="object-contain saturate-60"
                                priority
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-xl md:text-3xl font-libre text-[#B5A691] tracking-tight">
                                House of Herrera
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#B5A691]/50 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={scrollToNext}
                >
                    <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15 13L29 1" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </section>

            {/* Section 2: The Herrera Dynasty Content */}
            <section className="w-full flex flex-col items-center snap-start relative bg-black pt-16 md:pt-22 pb-16 md:pb-22 gap-12 md:gap-18 px-6 md:px-0">

                <div className="max-w-5xl w-full mx-auto md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center">
                    {/* Left Column: Text Content (Takes 2/3 space) */}
                    <div className="md:col-span-2 flex flex-col z-10 text-center md:text-left">
                        {/* Top Small Heading */}
                        <div className="mb-6 md:mb-10">
                            <h3 className="text-xl md:text-3xl font-libre text-[#B5A691] leading-[1.3] tracking-tight font-light">
                                A Glorious Dynasty of over<br />Seven Centuries of Trust.
                            </h3>
                            <div className="w-full h-[1px] bg-[#B5A691]/80 mt-4 md:mt-2" />
                        </div>

                        {/* Large Title */}
                        <div className="mb-10 md:mb-14">
                            <h2 className="text-[3rem] md:text-[7rem] font-libre text-[#B5A691] leading-[0.85] tracking-tighter">
                                <span className="font-light block mb-2 opacity-90">The</span>
                                <span className="font-light -tracking-[0.06em] block">Herrera</span>
                                <span className="font-light -tracking-[0.06em] block">Dynasty</span>
                            </h2>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-3 max-w-2xl mx-auto md:mx-0">
                            <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/80 leading-relaxed md:text-left">
                                A union of eminent families with diverse nationalities, that have left their mark throughout various parts of Europe and Latin America for over six centuries.
                            </p>
                            <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/80 leading-relaxed md:text-left">
                                The House of Herrera has extensively influenced international trade and was largely responsible for pioneering the earliest known banking system in Latin America. The long-standing influence of the Herrera Dynasty has been acknowledged by the high levels of trust harboured over generations.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Large Crest (Takes 1/3 space) */}
                    <div className="md:col-span-1 flex justify-center items-center">
                        <div className="relative w-48 h-64 md:w-full md:aspect-[3/4] md:scale-170">
                            <Image
                                src="/images/about/hofHP (1)-1.png"
                                alt="Family Crest"
                                fill
                                className="object-contain saturate-60"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Ancestor Highlights */}
                <div className="w-full flex flex-col gap-20">
                    <AncestorSection
                        name={<>Hernan De Herrera<br />Lord of Ampudia I</>}
                        date="CIRCA 1355"
                        decorativeImage="/images/about/HofH-Lower3.png"
                        aboutName={<>Hernan De Herrera<br />Lord of Ampudia I</>}
                        isFirst
                    />
                    <AncestorSection
                        name={<>Pedro Garcia<br />De Herrera Y Rojas</>}
                        date="1390 - 1455"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>PEDRO GARCIA<br />DE HERRERA Y ROJAS</>}
                        pt="md:pt-46"
                    />
                     <AncestorSection
                        name={<>Diego Garcia<br />De Herrera Y Ayala</>}
                        date="CIRCA 1417"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>DIEGO GARCIA<br />DE HERRERA Y AYALA</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Agustin De Herrera<br />Y Rojas Ayala</>}
                        date="1569 - 1632"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>AGUSTIN DE HERRERA<br />Y ROJAS AYALA</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Juan Sarmiento De Herrera Y<br />Fernandez Pachego</>}
                        date="1607 - 1664"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JUAN SARMIENTO DE HERRERA<br />Y FERNANDEZ PACHEGO</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Agustin Nicolas<br />De Herrera Y Loaisa</>}
                        date="1633 - 1695"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>AGUSTIN NICOLAS<br />DE HERRERA Y LOAISA</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Francisco Carlos<br />Herrera Y Ascanio</>}
                        date="1671 - 1730"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>FRANCISCO CARLOS<br />HERRERA Y ASCANIO</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Juan Manuel<br />De Herrera Y Misones</>}
                        date="1712 - 1767"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JUAN MANUEL<br />DE HERRERA Y MISONES</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Martin Eugenio<br />De Herrera Y Rada</>}
                        date="1754 - 1810"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>MARTIN EUGENIO<br />DE HERRERA Y RADA</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Mariano Jose Herrera<br />Y Rodriguez Del Toro Ibara</>}
                        date="CIRCA 1789"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>MARiano Jose Herrera<br />Y Rodriguez Del Toro Ibara</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Jose De Herrera<br />Y Irogoyen</>}
                        date="CIRCA 1813"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JOSE DE HERRERA<br />Y IROGOYEN</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        name={<>Jose De Herrera<br />Manrique De Lara</>}
                        date="CIRCA 1880"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JOSE DE HERRERA<br />MANRIQUE DE LARA</>}
                        pt="md:pt-46"
                    />
                    <AncestorSection
                        href="/jose-herrera-von-uslar-gleichen"
                        name={<>Jose Herrera<br />Von Uslar Gleichen</>}
                        date="CIRCA 1906"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JOSE HERRERA<br />VON USLAR GLEICHER</>}
                        pt="md:pt-46"
                    />
                     <AncestorSection
                        name={<>Julio Jose Herrera Velutini<br />Von Uslar</>}
                        date="1945 - 2019"
                        decorativeImage="/images/about/image (1).png"
                        decorativeImageStyles="object-contain brightness-60 rotate-90"
                        decorativeContainerStyles="w-58 h-38"
                        aboutName={<>JUlio Jose Herrera Velutini<br />Von Uslar</>}
                        pt="md:pt-46"
                    />
                </div>

            </section>

            {/* Section 3: Contact & Footer */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden px-4">
                <div className="max-w-6xl w-full mx-auto flex flex-col items-center flex-grow justify-center relative">

                    {/* Background Style Large Title */}
                    <div className="mb-10 md:mb-15 text-center select-none pointer-events-none">
                        <h2 className="text-[3.5rem] md:text-[11rem] font-libre text-[#B5A691]/50 leading-[0.85] tracking-tight">
                            House of<br />
                            Herrera
                        </h2>
                    </div>

                    {/* Secondary Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-18 md:gap-y-6 text-[9px] md:text-[10px] tracking-[0.1em] text-[#B5A691]/70 font-extralight mb-12 md:mb-14 font-din z-10 w-full max-w-5xl">
                        <Link href="/about" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">About</Link>
                        <Link href="/dynasty" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Dynasty</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Symbols of the House</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Family Estates</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Orders and Distinctions</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Bibliography</Link>
                    </nav>

                    {/* Connect Section */}

                    <div className="flex flex-col items-center gap-0 z-10">
                        <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#B5A691] font-light font-din opacity-80 uppercase">CONNECT WITH US</span>

                        <div className="relative w-40 h-40 md:w-50 md:h-50">
                            <Image
                                src="/images/about/hofHP (1)-1.png"
                                alt="Crest"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Absolute Bottom Footer Text */}
                <div className="absolute bottom-6 md:bottom-8 text-center w-full px-4">
                    <p className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.25em] text-[#B5A691]/80 font-light uppercase font-din leading-relaxed">
                        THE OFFICIAL WEBSITE OF THE HOUSE OF HERRERA
                    </p>
                </div>
            </section>
        </div>
    );
}
