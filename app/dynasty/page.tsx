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
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative bg-white overflow-hidden">

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
            </section>
        </div>
    );
}
