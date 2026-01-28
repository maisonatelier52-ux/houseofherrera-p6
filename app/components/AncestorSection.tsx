"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface AncestorSectionProps {
    href?: string;
    name: ReactNode;
    date: string;
    decorativeImage: string;
    decorativeImageStyles?: string;
    decorativeContainerStyles?: string;
    aboutName: ReactNode;
    isFirst?: boolean;
    pt?: string;
    mt?: string;
}

export default function AncestorSection({
    href,
    name,
    date,
    decorativeImage,
    decorativeImageStyles = "object-contain",
    decorativeContainerStyles = "w-full max-w-[320px] md:max-w-[584px] aspect-[584/74]",
    aboutName,
    isFirst = false,
    pt = "md:pt-18",
    mt = "mt-0"
}: AncestorSectionProps) {
    const TitleContent = (
        <div className="flex flex-col items-center">
            {/* Decorative Image */}
            <div className={`mb-8 relative ${decorativeContainerStyles}`}>
                <Image
                    src={decorativeImage}
                    alt="Decorative Divider"
                    fill
                    className={decorativeImageStyles}
                    priority
                />
            </div>

            {/* Person Title */}
            <div className={`text-center mb-8 ${isFirst ? "" : "mt-10"}`}>
                <h2 className="text-[2.5rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90 group-hover:opacity-100 transition-opacity whitespace-pre-line">
                    {name}
                </h2>
            </div>

            {/* Bottom Line & Date */}
            <div className="w-full max-w-2xl flex flex-col items-center">
                <div className="w-full h-[0.5px] bg-[#B5A691]/40 mb-6" />
                <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#B5A691] font-din uppercase opacity-70">{date}</span>
            </div>
        </div>
    );

    return (
        <div className={`max-w-5xl w-full mx-auto md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center ${mt}`}>
            {/* Left Column: Title Content (2/3 space) */}
            <div className="md:col-span-2">
                {href ? (
                    <Link href={href} className="group cursor-pointer block">
                        {TitleContent}
                    </Link>
                ) : (
                    TitleContent
                )}
            </div>

            {/* Right Column: Sidebar Info (1/3 space) */}
            {href ? (
                <Link href={href} className={`md:col-span-1 flex flex-col items-center md:items-start md:pl-16 ${pt} group cursor-pointer`}>
                    <div className="space-y-1 text-center md:text-left">
                        <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691] font-bold font-din uppercase block group-hover:text-[#B5A691]/80 transition-colors">ABOUT</span>
                        <span className="text-[9px] md:text-[10px] tracking-[0.15em] text-[#B5A691]/70 font-light font-din uppercase leading-relaxed block max-w-[180px] group-hover:text-[#B5A691] transition-colors whitespace-pre-line">
                            {aboutName}
                        </span>
                    </div>
                </Link>
            ) : (
                <div className={`md:col-span-1 flex flex-col items-center md:items-start md:pl-16 ${pt}`}>
                    <div className="space-y-1 text-center md:text-left">
                        <span className="text-[10px] tracking-[0.2em] text-[#B5A691] font-bold font-din uppercase block">ABOUT</span>
                        <span className="text-[10px] tracking-[0.15em] text-[#B5A691]/70 font-light font-din uppercase leading-relaxed block max-w-[180px] whitespace-pre-line">
                            {aboutName}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
