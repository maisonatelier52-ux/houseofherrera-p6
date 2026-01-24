"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <div className="min-h-screen w-full flex flex-col bg-white">
            {/* Navigation Container - max-w-5xl */}
            <div className="w-full">
                <div className="max-w-5xl w-full mx-auto px-8">
                    {/* Top Navigation */}
                    <div className="w-full flex items-center justify-end gap-4 text-[9px] tracking-[0.2em] text-[#B5A691] font-medium uppercase pt-8">
                        <span style={{ fontFamily: 'din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif' }}>THE HOUSE OF HERRERA</span>
                        <span className="text- #B5A691">|</span>
                        <span className="cursor-pointer transition-colors" style={{ fontFamily: 'din-next-w01-light, din-next-w02-light, din-next-w10-light, sans-serif' }}>MENU</span>
                        <div className="flex gap-1">
                            <div className="w-1 h-1 bg-[#B5A691] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#B5A691] rounded-full"></div>
                            <div className="w-1 h-1 bg-[#B5A691] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Centered - max-w-5xl */}
            <div className="flex-grow flex items-center justify-center">
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
            </div>
        </div>
    );
}
