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

            {/* Placeholder for Next Sections */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative bg-black">
                <h2 className="text-4xl font-libre text-[#B5A691]">Dynasty Content Coming Soon</h2>
            </section>
        </div>
    );
}
