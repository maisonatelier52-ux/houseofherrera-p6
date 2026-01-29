"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Symbols() {
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
                                Coat of Arms
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

            {/* Section 2: Heritage Coat of Arms (Lengthy Free Scroll) */}
            <section className="w-full flex flex-col items-center bg-black pt-8 pb-20 snap-start">
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                            priority
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90">
                            De Herrera De Sarmiento<br />
                            Y Rojas Y Ayala
                        </h2>
                    </div>

                    {/* Main Coat of Arms Logo */}
                    <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square transition-all duration-1000">
                        <Image
                            src="/images/symbols/House of Herrera Coat of Arms 2.png"
                            alt="House of Herrera Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                            priority
                        />
                    </div>

                </div>

                {/* Second Block: Lanzarote Coat of Arms */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-48">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90 uppercase">
                            Lanzarote Coat of Arms
                        </h2>
                    </div>

                    {/* Dual Coat of Arms Display */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full max-w-4xl px-4">
                        <div className="relative aspect-square w-full">
                            <Image
                                src="/images/symbols/lanzarote cost of arms 1.png"
                                alt="Lanzarote Coat of Arms Variant 1"
                                fill
                                className="object-contain sepia brightness-[0.4]"
                            />
                        </div>
                        <div className="relative aspect-square w-full">
                            <Image
                                src="/images/symbols/lanzarote coat of arms 2.png"
                                alt="Lanzarote Coat of Arms Variant 2"
                                fill
                                className="object-contain sepia brightness-[0.6]"
                            />
                        </div>
                    </div>
                </div>

                {/* Block 3: Herrera Coat of Arms */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-48">
                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                        />
                    </div>
                    {/* Section Title */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90 uppercase">
                            Herrera Coat of Arms
                        </h2>
                    </div>
                    {/* Main Coat of Arms Logo */}
                    <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square transition-all duration-1000">
                        <Image
                            src="/images/symbols/herrera coat of arms.png"
                            alt="Herrera Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.5]"
                        />
                    </div>
                </div>

                {/* Block 4: Uslar Coat of Arms */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-48">
                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                        />
                    </div>
                    {/* Section Title */}
                    <div className="mb-8 md:mb-12 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90 uppercase">
                            Uslar Coat of Arms
                        </h2>
                    </div>
                    {/* Main Coat of Arms Logo */}
                    <div className="relative w-full max-w-[400px] md:max-w-[420px] aspect-square transition-all duration-1000">
                        <Image
                            src="/images/symbols/uslar coat.png"
                            alt="Uslar Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.5]"
                        />
                    </div>
                </div>

                {/* Block 5: Gleichen Coat of Arms */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-48">
                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                        />
                    </div>
                    {/* Section Title */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90 uppercase">
                            Gleichen Coat of Arms
                        </h2>
                    </div>
                    {/* Main Coat of Arms Logo */}
                    <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square transition-all duration-1000">
                        <Image
                            src="/images/symbols/gleichen coat of arms.png"
                            alt="Gleichen Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.5]"
                        />
                    </div>
                </div>

                {/* Block 6: Velutini Coat of Arms */}
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center mt-32 md:mt-48">
                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-99"
                        />
                    </div>
                    {/* Section Title */}
                    <div className="mb-12 md:mb-16 text-center">
                        <h2 className="text-[1.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light opacity-90 uppercase">
                            Velutini Coat of Arms
                        </h2>
                    </div>
                    {/* Main Coat of Arms Logo */}
                    <div className="relative w-full max-w-[400px] md:max-w-[500px] aspect-square transition-all duration-1000">
                        <Image
                            src="/images/symbols/velutini coat of arms.png"
                            alt="Velutini Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.4]"
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
