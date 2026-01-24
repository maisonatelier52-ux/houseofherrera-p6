"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative z-20">

            {/* Top Navigation */}
            <div className="absolute top-12 right-12 flex items-center gap-4 text-[9px] tracking-[0.2em] text-black/40 font-medium uppercase z-30">
                <span style={{ fontFamily: 'din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif' }}>THE HOUSE OF HERRERA</span>
                <span className="text-black/20">|</span>
                <span className="cursor-pointer hover:text-black transition-colors" style={{ fontFamily: 'din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif' }}>MENU</span>
                <div className="flex gap-1">
                    <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                    <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                    <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center gap-8 -mt-10">
                {/* Crest Image */}
                <div className="relative w-48 h-64 md:w-85 md:h-89">
                    <Image
                        src="/images/about/hofHP (1).avif"
                        alt="Crest"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Title */}
                <div
                >
                    <h1 className="text-4xl md:text-5xl font-libre text-[#9d8b70] tracking-tight">
                        House of Herrera
                    </h1>
                </div>
            </div>

        </div>
    );
}
