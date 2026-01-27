"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
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
            {/* Section 1: Hero */}
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

            {/* Section 2: The Dynasty */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8">
                <div className="max-w-2xl w-full mx-auto text-center md:text-left flex flex-col ">

                    {/* Header Title */}
                    <div className="mb-8">
                        <h2 className="text-[3.5rem] md:text-[7rem] font-libre text-[#B5A691] leading-[0.7] tracking-tighter">
                            <span className=" font-light block mb-5 scale-y-110">The</span>
                            <span className=" -tracking-[0.05em] block">Dynasty</span>
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="max-w-3xl mb-6 mt-8">
                        <p className="text-[12px] md:text-[13px] font-helvetica font-extralight tracking-tighter text-[#B5A691]/80 leading-relaxed md:text-left">
                            The Herrera Family is a longstanding patrimony of Spanish nobility that gained prominence in the 14th century.
                            The family is notably distinguished as landowners, lords, conquerors, merchants and later, bankers with
                            unbound influence in Spain, the Canaries, Latin America, Germany and England. The House of Herrera was
                            established as a deference to the trust and responsibilities warranted over centuries of partnerships.
                        </p>
                    </div>

                    {/* Sub Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-18 text-[10px] md:text-[12px] tracking-[0.2em] text-[#B5A691] font-extralight uppercase border-t border-[#B5A691]/80 pt-4 w-full max-w-2xl mt-4 font-din">
                        <span className="cursor-pointer hover:text-[#B5A691]/60 transition-colors">FAMILY HISTORY</span>
                        <span className="cursor-pointer hover:text-[#B5A691]/60 transition-colors">SYMBOLS OF THE HOUSE</span>
                        <span className="cursor-pointer hover:text-[#B5A691]/60 transition-colors">FAMOUS ESTATES</span>
                    </nav>
                </div>

                {/* Bottom Chevron icon */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#B5A691]/50 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={scrollToNext}
                >
                    <svg width="80" height="40" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L20 18L38 2" stroke="currentColor" strokeWidth="3" />
                    </svg>
                </div>
            </section>

            {/* Section 3: House of Herrera (Acts of Bravery) */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8">
                <div className="max-w-2xl w-full mx-auto flex flex-col">

                    {/* Small Crest */}
                    <div className="relative w-48 h-48 md:w-62 md:h-62 md:-mb-10 -mb-6 mx-auto md:mx-0 pl-45 md:pl-84">
                        <Image
                            src="/images/about/hofHP (1)-1.png"
                            alt="Crest"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Header Title */}
                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-[3.5rem] md:text-[7rem] font-libre text-[#B5A691] leading-[0.8] tracking-tighter">
                            <span className="font-light block mb-2">House of</span>
                            <span className="font-medium block">Herrera</span>
                        </h2>
                    </div>

                    {/* Description Text Blocks */}
                    <div className="space-y-6 mb-8 text-center md:text-left">
                        <p className="text-[12px] md:text-[13px] font-helvetica font-extralight tracking-tight text-[#B5A691]/80 leading-relaxed">
                            The Herrera family has been known since the 14th century mainly for acts of bravery that have
                            earned them titles and conquests over the generations. The family has exerted a strong military
                            and political influence, and is imbued with traditions and values that endure today. Over the course
                            of seven centuries, the Herrera family has played a key role in the development of finance,
                            commerce and fashion in Spain, North and Latin America, and more recently in the UK and beyond.
                        </p>
                        <p className="text-[12px] md:text-[13px] font-helvetica font-extralight tracking-tight text-[#B5A691]/80 leading-relaxed">
                            The Herrera family has had a pivotal influence on Latin American and Caribbean history and has
                            especially influenced the Latin American Banking & Real Estate industry since 14th century with the
                            founding of Hacienda La Vega (1590) and in the late 19th century (1890) with the founding of
                            Banco Caracas by Julio César Velutini Couturier, who chaired Banco Caracas until 1930.
                        </p>
                    </div>

                    {/* Sub Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-88 text-[10px] md:text-[12px] tracking-[0.2em] text-[#B5A691] font-extralight uppercase border-t border-[#B5A691]/80 pt-4 w-full max-w-2xl font-din">
                        <span className="cursor-pointer hover:text-[#B5A691]/60 transition-colors">ORDERS & DISTINCTIONS</span>
                        <span className="cursor-pointer hover:text-[#B5A691]/60 transition-colors">BIBLIOGRAPHY</span>
                    </nav>

                    {/* Bottom Chevron icon */}
                    <Link href="/dynasty" className="mt-8 mb-16 flex justify-center md:justify-end text-[#B5A691]/50 opacity-50 hover:opacity-100 hover:text-[#B5A691] transition-all cursor-pointer">
                        <svg width="40" height="80" viewBox="0 0 20 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L18 20L2 38" stroke="currentColor" strokeWidth="3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Section 4: Contact & Footer */}
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
