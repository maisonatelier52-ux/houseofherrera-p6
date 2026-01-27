"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Dynasty() {
    return (
        <div className="w-full bg-black snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth flex flex-col gap-32">
            <Navbar />

            {/* Section 1: Hero - Identical to About Page */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative">
                <div className="max-w-5xl w-full mx-auto px-8">
                    <div className="flex flex-col items-center gap-1">
                        {/* Crest Image */}
                        <div className="relative w-48 h-64 md:w-80 md:h-80">
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
                            <h1 className="text-2xl md:text-3xl font-libre text-[#B5A691] tracking-tight">
                                House of Herrera
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#B5A691]/50 opacity-50">
                    <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15 13L29 1" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </section>

            {/* Section 2: The Herrera Dynasty Content */}
            <section className="w-full flex flex-col items-center snap-start relative bg-black pt-22 pb-22 gap-18">

                <div className="max-w-5xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    {/* Left Column: Text Content (Takes 2/3 space) */}
                    <div className="md:col-span-2 flex flex-col z-10">
                        {/* Top Small Heading */}
                        <div className="mb-10">
                            <h3 className="text-2xl md:text-3xl font-libre text-[#B5A691] leading-[1.3] tracking-tight font-light">
                                A Glorious Dynasty of over<br />Seven Centuries of Trust.
                            </h3>
                            <div className="w-full h-[1px] bg-[#B5A691]/80 mt-2" />
                        </div>

                        {/* Large Title */}
                        <div className="mb-14">
                            <h2 className="text-[5rem] md:text-[7rem] font-libre text-[#B5A691] leading-[0.85] tracking-tighter">
                                <span className="font-light block mb-2 opacity-90">The</span>
                                <span className="font-light -tracking-[0.06em] block">Herrera</span>
                                <span className="font-light -tracking-[0.06em] block">Dynasty</span>
                            </h2>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-3 max-w-2xl">
                            <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/80">
                                A union of eminent families with diverse nationalities, that have left their mark throughout various parts of Europe and Latin America for over six centuries.
                            </p>
                            <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/80">
                                The House of Herrera has extensively influenced international trade and was largely responsible for pioneering the earliest known banking system in Latin America. The long-standing influence of the Herrera Dynasty has been acknowledged by the high levels of trust harboured over generations.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Large Crest (Takes 1/3 space) */}
                    <div className="md:col-span-1 flex justify-center items-center">
                        <div className="relative w-full aspect-[3/4] md:scale-170">
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

                <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    {/* Left Column: Title Content (2/3 space) */}
                    <div className="md:col-span-2 flex flex-col items-center">
                        {/* Decorative Header Ornate */}
                        <div className="mb-6 relative w-[584px] h-[74px]">
                            <Image
                                src="/images/about/HofH-Lower3.png"
                                alt="Ornate Divider"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Person Title */}
                        <div className="text-center mb-8">
                            <h2 className="text-[3.5rem] md:text-[2.5rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                                Hernan De Herrera<br />
                                Lord of Ampudia I
                            </h2>
                        </div>

                        {/* Bottom Line & Date */}
                        <div className="w-full max-w-2xl flex flex-col items-center">
                            <div className="w-full h-[0.5px] bg-[#B5A691]/40 mb-6" />
                            <span className="text-[11px] tracking-[0.4em] text-[#B5A691] font-din uppercase opacity-70">CIRCA 1355</span>
                        </div>
                    </div>

                    {/* Right Column: Sidebar Info (1/3 space) */}
                    <div className="md:col-span-1 flex flex-col items-start md:pl-16 pt-12 md:pt-0">
                        <div className="space-y-1">
                            <span className="text-[10px] tracking-[0.2em] text-[#B5A691] font-bold font-din uppercase block">ABOUT</span>
                            <span className="text-[10px] tracking-[0.15em] text-[#B5A691]/70 font-light font-din uppercase leading-relaxed block max-w-[180px]">
                                HERNAN DE HERRERA<br />
                                LORD OF AMPUDIA I
                            </span>
                        </div>
                    </div>
                </div>

            </section>

             {/* Section 3: Contact & Footer */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden">
                <div className="max-w-6xl w-full mx-auto px-8 flex flex-col items-center flex-grow justify-center relative">

                    {/* Background Style Large Title */}
                    <div className="mb-15 text-center select-none pointer-events-none">
                        <h2 className="text-[6rem] md:text-[11rem] font-libre text-[#B5A691]/50 leading-[0.85] tracking-tight">
                            House of<br />
                            Herrera
                        </h2>
                    </div>

                    {/* Secondary Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-18 gap-y-6 text-[10px] tracking-[0.1em] text-[#B5A691]/70 font-extralight mb-14 font-din z-10 w-full max-w-5xl">
                        <Link href="/about" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">About</Link>
                        <Link href="/dynasty" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Dynasty</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Symbols of the House</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Family Estates</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Orders and Distinctions</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Bibliography</Link>
                    </nav>

                    {/* Connect Section */}

                    <div className="flex flex-col items-center gap-0 z-10">
                        <span className="text-[9px] tracking-[0.2em] text-[#B5A691] font-light font-din opacity-80">CONNECT WITH US</span>

                        <div className="relative w-50 h-50">
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
                <div className="absolute bottom-8 text-center w-full">
                    <p className="text-[9px] tracking-[0.25em] text-[#B5A691]/80 font-light uppercase font-din">
                        THE OFFICIAL WEBSITE OF THE HOUSE OF HERRERA
                    </p>
                </div>
            </section>


        </div>
    );
}
