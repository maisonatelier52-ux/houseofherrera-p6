"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

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
                                className="object-contain"
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
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl w-full mx-auto md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center">
                    {/* Left Column: Title Content (2/3 space) */}
                    <div className="md:col-span-2 flex flex-col items-center">
                        {/* Decorative Header Ornate */}
                        <div className="mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                            <Image
                                src="/images/about/HofH-Lower3.png"
                                alt="Ornate Divider"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Person Title */}
                        <Link href="/jose-herrera-von-uslar-gleichen" className="group text-center mb-8 block cursor-pointer">
                            <h2 className="text-[2.5rem] md:text-[2.5rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90 group-hover:opacity-100 transition-opacity">
                                Jose Herrera<br />
                                Von Uslar Gleichen
                            </h2>
                        </Link>

                        {/* Bottom Line & Date */}
                        <div className="w-full max-w-2xl flex flex-col items-center">
                            <div className="w-full h-[0.5px] bg-[#B5A691]/40 mb-6" />
                            <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#B5A691] font-din uppercase opacity-70">CIRCA 1355</span>
                        </div>
                    </div>

                    {/* Right Column: Sidebar Info (1/3 space) */}
                    <Link href="/jose-herrera-von-uslar-gleichen" className="md:col-span-1 flex flex-col items-center md:items-start md:pl-16 pt-18 group cursor-pointer">
                        <div className="space-y-1 text-center md:text-left">
                            <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691] font-bold font-din uppercase block group-hover:text-[#B5A691]/80 transition-colors">ABOUT</span>
                            <span className="text-[9px] md:text-[10px] tracking-[0.15em] text-[#B5A691]/70 font-light font-din uppercase leading-relaxed block max-w-[180px] group-hover:text-[#B5A691] transition-colors">
                                JOSE HERRERA<br />
                                VON USLAR GLEICHEN
                            </span>
                        </div>
                    </Link>
                </div>
                

                <div className="max-w-5xl w-full mx-auto md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center mt-0">
                    {/* Left Column: Title Content (2/3 space) */}
                    <div className="md:col-span-2 flex flex-col items-center">
                        {/* Decorative Item: image (1).png */}
                        <div className="mb-6 relative w-58 h-38">
                            <Image
                                src="/images/about/image (1).png"
                                alt="Column Divider"
                                fill
                                className="object-contain brightness-110 rotate-90"
                            />
                        </div>

                        {/* Person Title */}
                        <div className="text-center mb-8 mt-10">
                            <h2 className="text-[2.5rem] md:text-[2.5rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90">
                                Pedro Garcia<br />
                                De Herrera Y Rojas
                            </h2>
                        </div>

                        {/* Bottom Line & Date */}
                        <div className="w-full max-w-2xl flex flex-col items-center">
                            <div className="w-full h-[0.5px] bg-[#B5A691]/40 mb-6" />
                            <span className="text-[11px] tracking-[0.4em] text-[#B5A691] font-din uppercase opacity-70">1390 - 1455</span>
                        </div>
                    </div>

                    {/* Right Column: Sidebar Info (1/3 space) */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start md:pl-16 pt-46">
                        <div className="space-y-1 text-center md:text-left">
                            <span className="text-[10px] tracking-[0.2em] text-[#B5A691] font-bold font-din uppercase block">ABOUT</span>
                            <span className="text-[10px] tracking-[0.15em] text-[#B5A691]/70 font-light font-din uppercase leading-relaxed block max-w-[180px]">
                                PEDRO GARCIA<br />
                                DE HERRERA Y ROJAS
                            </span>
                        </div>
                    </div>
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
