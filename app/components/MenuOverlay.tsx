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
                    <div className="absolute inset-0 z-0 ">
                        <Image
                            src="/images/about/fac1d5_fbf98aa49290418bbd98be916a433ab2~mv2 (1).avif"
                            alt="Menu Background"
                            fill
                            className="object-cover opacity-20 scale-100 transition-transform duration-700"
                            priority
                        />
                    </div>

                    {/* Left Side Watermark Text */}
                    <div className="hidden lg:flex flex-[1.5] items-center justify-center z-10 select-none pointer-events-none pl-20">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h2 className="text-[7rem] md:text-[9rem] font-libre text-[#5c5954ff]/30 leading-[0.8] tracking-tighter">
                                House of<br />
                                Herrera
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side Content Container */}
                    <div className="relative flex-1 flex flex-col items-center justify-center z-10 bg-white/60 backdrop-blur-md lg:bg-transparent">

                        {/* Close Button */}
                        <div className="absolute top-10 right-10 flex items-center gap-3 group cursor-pointer pointer-events-auto" onClick={onClose}>
                            <X className="w-5 h-5 text-[#757370ff]/70 group-hover:text-[#757370ff]/50 transition-colors" strokeWidth={2} />
                        </div>

                        <div className="relative w-full flex items-center justify-center gap-0 pl-12">
                            {/* Menu Items */}
                            <nav className="flex flex-col items-center md:items-start gap-2">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.2, delay: 0.2 + index * 0.1 }}
                                        className="flex flex-col items-center md:items-start gap-3"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="whitespace-pre-line uppercase relative inline-block no-underline transition-all duration-300 ease-in-out tracking-[0.2em] md:tracking-wider text-[0.55rem] md:text-[0.60rem] font-light text-[#757370ff] hover:text-[#B5A691] text-center md:text-left"
                                        >
                                            {item.label}
                                        </Link>
                                        {index < menuItems.length - 1 && (
                                            <div
                                                className="w-16 md:w-[88px] h-[1px] my-4 md:my-[1.5rem] bg-[repeating-linear-gradient(90deg,rgba(181,166,145,0.4)_1px,rgba(181,166,145,0.4)_1px,rgba(181,166,145,0.4)_4px,transparent_5px)]"
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Large Crest on the right of the menu */}
                            <div className="hidden md:block relative w-74 h-90 opacity-70">
                                <Image
                                    src="/images/about/hofHP (1)-2.png"
                                    alt="Family Crest"
                                    fill
                                    className="object-contain grayscale brightness-[0.3]"
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
