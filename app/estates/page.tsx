"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Estates() {
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

            {/* Section 2: Hacienda De La Vega */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                            priority
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Hacienda De La Vega<br />
                            (Caracas)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            The Hacienda de La Vega, is a historical monument in Caracas, Venezuela. It was one of the first family properties of the Herrera family in Latin America. It is still a strong symbolic place for the current generations.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            It is one of the oldest haciendas in Venezuela, dating back to the time of the Spanish colonization in the Caracas Valley, it refers to the time when the first generations of the Herrera have been sent by the Spanish crown. In 1899, the Hacienda was acquired by Jorge Uslar (Herrera&apos;s ancestor) who received it after an agreement with the late Banco de Caracas. He undertook colossal reconstruction and embellishment works.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            Later on, the space became a real cultural place for the local life, becoming the meeting point of culture and social life. The Hacienda remains in the Herrera von Uslar family, today is open for the public as a history landmark.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <div className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] opacity-80">
                        <Image
                            src="/images/estates/Estates-1.avif"
                            alt="Hacienda De La Vega"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                            priority
                        />
                    </div>

                </div>
            </section>

            {/* Section 3: Contact & Footer */}
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
