"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function OrdersAndDistinctions() {
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToNext = () => {
        if (containerRef.current) {
            const vh = window.innerHeight;
            const currentScroll = containerRef.current.scrollTop;
            containerRef.current.scrollTo({
                top: currentScroll + vh,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            ref={containerRef}
            className="h-screen w-full overflow-y-auto overflow-x-hidden transition-all duration-1000 bg-black snap-y snap-mandatory scroll-smooth"
        >
            <Navbar />

            {/* Section 1: Hero */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-4 text-center bg-black">
                <div className="max-w-5xl w-full mx-auto">
                    <div className="flex flex-col items-center gap-1">
                        {/* Crest Image */}
                        <div className="relative w-40 h-56 md:w-80 md:h-80">
                            <Image
                                src="/images/about/hofHP (1)-1ee.png"
                                alt="Crest"
                                fill
                                className="object-contain brightness-[0.9] opacity-90"
                                priority
                            />
                        </div>

                        {/* Title */}
                        <div className="mt-8">
                            <h1 className="text-xl md:text-3xl font-libre text-[#B5A691] tracking-[0.05em] font-light">
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

            {/* Section 2, Block 1: Marquisate de Lanzarote */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-6 md:mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light uppercase">
                            MARQUISATE DE<br />
                            LANZAROTE
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-xl mb-8">
                        <p className="text-[12px] md:text-[14px] font-helvetica font-extralight tracking-tight text-[#B5A691] leading-relaxed text-left">
                            The marquisate of Lanzarote is a Spanish noble title created on May 1, 1584 by King Philip II in favor of Agustin de Herrera y Rojas, governor and captain general of the islands of La Madera and Porto Santo.
                        </p>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[420px] aspect-square">
                        <Image
                            src="/images/symbols/lanzarote cost of arms 1.png"
                            alt="Marquisate de Lanzarote Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2, Block 2: Marquisate of Herrera and Vallehermoso */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black mt-22 pt-8">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-8 md:mb-8 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light uppercase">
                            MARQUISATE OF HERRERA<br />
                            AND VALLEHERMOSO
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-xl mb-6">
                        <p className="text-[12px] md:text-[14px] font-helvetica font-extralight tracking-tight text-[#B5A691] leading-relaxed text-left">
                            The Marquis de Herrera and Vallehermoso is a Spanish peerage created the 20 of January of 1750 by Fernando VI with the previous vizcondado of Chiclin in favor of José de Herrera and Juan Zarzosa, a resident of Trujillo (Peru).
                        </p>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[480px] aspect-square">
                        <Image
                            src="/images/symbols/MARQUISATE OF HERRERA-2.png"
                            alt="Marquisate of Herrera and Vallehermoso Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2, Block 3: Conde de Palomar */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black mt-22 pt-8">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-4 md:mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light uppercase">
                            CONDE<br />
                            DE PALOMAR
                        </h2>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[480px] aspect-square">
                        <Image
                            src="/images/symbols/CONDE DE PALOMAR.png"
                            alt="Conde de Palomar Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2, Block 4: Marquisate of Torre Casa */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black mt-22 pt-8">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-4 md:mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-6">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light uppercase">
                            MARQUISATE OF<br />
                            TORRE CASA
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="max-w-xl mb-6">
                        <p className="text-[12px] md:text-[14px] font-helvetica font-extralight tracking-tight text-[#B5A691] leading-relaxed text-left">
                            From 1910 to 1992 to Reinaldo Herrera Uslar (1910-1972), IV marqués de Torre Casa and then his son Reinaldo Herrera Guevara, V marqués de Torre Casa.
                        </p>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[420px] aspect-square">
                        <Image
                            src="/images/symbols/MARQUISATE OF TORRE CASA.png"
                            alt="Marquisate of Torre Casa Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2, Block 5: Marques de Fuerteventura */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black mt-22 pt-8">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-4 md:mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light uppercase">
                            MARQUES DE<br />
                            FUERTEVENTURA
                        </h2>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[460px] aspect-square">
                        <Image
                            src="/images/symbols/Coat_of_Arms_of_Fuerteventurasvg.png"
                            alt="Marques de Fuerteventura Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 2, Block 6: Marques de Herrera */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-6 md:px-8 bg-black mt-22 pt-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider */}
                    <div className="mb-4 md:mb-6 relative w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Divider"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-8">
                        <h2 className="text-[2rem] md:text-[2rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light uppercase">
                            MARQUES DE<br />
                            HERRERA
                        </h2>
                    </div>

                    {/* Coat of Arms Image */}
                    <div className="relative w-full max-w-[460px] aspect-square">
                        <Image
                            src="/images/symbols/Ho1copy.png"
                            alt="Marques de Herrera Coat of Arms"
                            fill
                            className="object-contain sepia brightness-[0.6]"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Navigation & Footer */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden px-4 bg-[#0A0A0A]">
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
                        <Link href="/orders-and-distinctions" className="cursor-pointer transition-colors whitespace-nowrap text-[#B5A691]">Orders and Distinctions</Link>
                        <Link href="/bibliography" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Bibliography</Link>
                    </nav>

                    {/* Connect Section */}
                    <div className="flex flex-col items-center gap-0 z-10">
                        <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#B5A691] font-light font-din opacity-80 uppercase">CONNECT WITH US</span>

                        <div className="relative w-40 h-40 md:w-50 md:h-50">
                            <Image
                                src="/images/about/hofHP (1)-1ee.png"
                                alt="Crest"
                                fill
                                className="object-contain brightness-[0.9] opacity-90"
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
