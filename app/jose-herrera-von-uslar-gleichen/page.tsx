"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function JoseHerreraPage() {
    return (
        <div className="w-full bg-black min-h-screen flex flex-col overflow-y-auto relative">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center px-8 py-4 text-center">
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center relative z-10">

                    {/* Family Crest */}
                    <div className="relative w-48 h-64 md:w-76 md:h-72 mb-0">
                        <Image
                            src="/images/about/hofHP (1)-1.png"
                            alt="Family Crest"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Headline Title */}
                    <div className="mb-8">
                        <h1 className="text-[3rem] md:text-[2.3rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light">
                            Jose Herrera<br />
                            Von Uslar Gleichen
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl font-libre text-[#B5A691]/80 font-light">
                            House of Herrera
                        </p>
                    </div>

                    {/* Date Tag */}
                    <div className="mb-12">
                        <span className="text-[11px] tracking-[0.4em] text-[#B5A691]/60 font-din uppercase">
                            CIRCA 1906
                        </span>
                    </div>

                    {/* Description Content */}
                    <div className="max-w-2xl space-y-2">
                        <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            Marquis of Lanzarote and Count of Palomar.
                        </p>

                        <p className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/60 leading-relaxed max-w-xl mx-auto">
                            A lawyer by profession, he studied in Venezuela and in the United States.<br />
                            In 1936, he co-founded the National Action Movement (MAN),<br />
                            with a purpose to fight against extremism, communism,<br />
                            dissolution and social unrest, and ultimately opposing<br />
                            the propagation of the Marxist-Leninist ideology in Venezuela,<br />
                            by any means necessary.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
