"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Bibliography() {
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
                    <div className="flex flex-col items-center gap-0">
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
                        <div className="mb-8 md:mb-12 md:mt-12">
                            <h1 className="text-[2rem] md:text-[3rem] font-libre text-[#B5A691] leading-[0.85] tracking-tighter opacity-90">
                                Bibliography
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="max-w-lg mx-auto">
                            <p className="text-[12px] md:text-[11.5px] font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                                The House of Herrera is one of the most influential families in Europe and Latin America. With strategic investments in properties across two continents, the family was celebrated in books, texts, novels, and stories, for &quot;owning everything as far as the eye can see&quot;.
                            </p>
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

            {/* Section 2: Contact & Footer */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden px-4">
                <div className="max-w-6xl w-full mx-auto px-8 flex flex-col items-center flex-grow justify-center relative">

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
                        <Link href="/symbols" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Symbols of the House</Link>
                        <Link href="/estates" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Family Estates</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Orders and Distinctions</Link>
                        <Link href="/bibliography" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Bibliography</Link>
                    </nav>

                    {/* Connect Section */}
                    <div className="flex flex-col items-center gap-0 z-10">
                        <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#B5A691] font-light font-din opacity-80 uppercase">CONNECT WITH US</span>

                        <div className="relative w-40 h-40 md:w-50 md:h-50">
                            <Image
                                src="/images/about/hofHP (1)-1.png"
                                alt="Crest"
                                fill
                                className="object-contain saturate-60"
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
