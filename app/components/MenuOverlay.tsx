"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface MenuOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "ABOUT", href: "/about" },
    { label: "HERRERA\nDYNASTY", href: "/dynasty" },
    { label: "ORDERS &\nDISTINCTIONS", href: "#" },
    { label: "SYMBOLS\nOF THE HOUSE", href: "#" },
    { label: "FAMILY ESTATES", href: "#" },
    { label: "BIBLIOGRAPHY", href: "#" },
];

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] w-full h-screen bg-white flex overflow-hidden"
                >
                    {/* Background Image Overlay */}
                    <div className=" inset-3 z-3">
                        <Image
                            src="/images/fac1d5_fbf98aa49290418bbd98be916a433ab2~mv2 (1).avif"
                            alt="Menu Background"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    </div>

                    {/* Left Side Watermark Text */}
                    <div className="hidden lg:flex flex-[1.5] items-center justify-center z-10 select-none pointer-events-none pl-20">
                        <h2 className="text-[12rem] md:text-[14rem] font-libre text-[#B5A691]/15 leading-[0.8] tracking-tighter">
                            House of<br />
                            Herrera
                        </h2>
                    </div>

                    {/* Right Side Content Container */}
                    <div className="relative flex-1 flex flex-col items-center justify-center z-10 bg-white/60 backdrop-blur-md lg:bg-transparent">

                        {/* Close Button */}
                        <div className="absolute top-10 right-10 flex items-center gap-3 group cursor-pointer pointer-events-auto" onClick={onClose}>
                            <span className="text-[10px] tracking-[0.2em] text-[#B5A691] font-din font-light uppercase opacity-50 group-hover:opacity-100 transition-opacity">Close</span>
                            <X className="w-5 h-5 text-[#B5A691]/50 group-hover:text-[#B5A691] transition-colors" strokeWidth={1} />
                        </div>

                        <div className="relative w-full flex items-center justify-center gap-16 px-12">
                            {/* Menu Items */}
                            <nav className="flex flex-col gap-0 w-full max-w-[150px]">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        className="flex flex-col items-center md:items-start"
                                    >
                                        {index === 0 && (
                                            <div className="w-20 h-[0.5px] bg-[repeating-linear-gradient(90deg,rgba(181,166,145,0.3)_0,rgba(181,166,145,0.3)_1px,transparent_1px,transparent_4px)] mb-2" />
                                        )}
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#B5A691]/70 hover:text-[#B5A691] font-din font-light uppercase py-5 transition-all whitespace-pre-line text-center md:text-left"
                                        >
                                            {item.label}
                                        </Link>
                                        <div className="w-20 h-[0.5px] bg-[repeating-linear-gradient(90deg,rgba(181,166,145,0.3)_0,rgba(181,166,145,0.3)_1px,transparent_1px,transparent_4px)] mt-2" />
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Large Crest on the right of the menu */}
                            <div className="hidden md:block relative w-44 h-60 opacity-60">
                                <Image
                                    src="/images/about/hofHP (1).avif"
                                    alt="Family Crest"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
