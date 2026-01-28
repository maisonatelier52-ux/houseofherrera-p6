"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { ancestors } from "../../data/ancestors";
import { notFound } from "next/navigation";
import { use } from "react";

export default function AncestorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const ancestor = ancestors.find((a) => a.slug === slug);

    if (!ancestor) {
        notFound();
    }

    return (
        <div className="w-full bg-black snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth flex flex-col relative">
            <Navbar />

            <section className="w-full flex flex-col items-center snap-start relative bg-black pt-12 pb-22 gap-18 text-center px-8">
                <div className="max-w-5xl w-full mx-auto flex flex-col items-center relative z-10">

                    {/* Family Crest */}
                    <div className="relative w-48 h-64 md:w-76 md:h-72 mb-0">
                        <Image
                            src={ancestor.crestImage}
                            alt="Family Crest"
                            fill
                            className="object-contain saturate-60"
                            priority
                        />
                    </div>

                    {/* Headline Title */}
                    <div className="mb-8">
                        <h1 className="text-[3rem] md:text-[2.3rem] font-libre text-[#B5A691] leading-[1] tracking-tight font-light whitespace-pre-line">
                            {ancestor.name.split("\n").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl font-libre text-[#B5A691]/80 font-light">
                            {ancestor.title}
                        </p>
                    </div>

                    {/* Date Tag */}
                    <div className="mb-12">
                        <span className="text-[11px] tracking-[0.4em] text-[#B5A691]/60 font-din uppercase">
                            {ancestor.date}
                        </span>
                    </div>

                    {/* Description Content */}
                    <div className="max-w-2xl space-y-6 mb-18">
                        {ancestor.bioParagraphs.map((para, i) => (
                            <p key={i} className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/60 leading-relaxed max-w-xl mx-auto">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Person Image (Optional) */}
                    {ancestor.portraitImage && (
                        <div className="relative w-64 h-80 md:w-72 md:h-96 mb-12 opacity-80">
                            <Image
                                src={ancestor.portraitImage}
                                alt={`${ancestor.name} Portrait`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    )}

                    {/* Additional Images Row (Optional) */}
                    {ancestor.historyImages && ancestor.historyImages.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl opacity-80 mb-12">
                            {ancestor.historyImages.map((img, i) => (
                                <div key={i} className="relative aspect-[2/3] w-full">
                                    <Image
                                        src={img}
                                        alt={`${ancestor.name} History ${i + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Legacy Section (Optional) */}
                    {ancestor.legacyParagraphs && ancestor.legacyParagraphs.length > 0 && (
                        <div className="max-w-2xl space-y-4 mt-4 mb-0">
                            {ancestor.legacyParagraphs.map((para, i) => (
                                <p key={i} className="text-[12px] md:text-[13px] font-helvetica font-light tracking-tight text-[#B5A691]/80 leading-relaxed max-w-xl mx-auto">
                                    {para}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Footer Section - Common Across Bio Pages */}
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
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Symbols of the House</Link>
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
