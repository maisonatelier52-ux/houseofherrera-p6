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
    { label: "SYMBOLS\nOF THE HOUSE", href: "/symbols" },
    { label: "FAMILY ESTATES", href: "/estates" },
    { label: "BIBLIOGRAPHY", href: "/bibliography" },
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
                            src="/images/about/image (2).png"
                            alt="Menu Background"
                            fill
                            className="object-cover grayscale brightness-[0.5] scale-100 transition-transform duration-700"
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
                            <h2 className="text-[7rem] md:text-[9rem] font-libre text-[#e1ddd8ff]/60 leading-[0.9] tracking-tighter">
                                House of<br />
                                Herrera
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right Side Content Container */}
                    <div className="relative flex-1 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-none md:bg-black/30 px-6">

                        {/* Close Button */}
                        <div className="absolute top-8 md:top-10 right-8 md:right-10 flex items-center gap-3 group cursor-pointer pointer-events-auto" onClick={onClose}>
                            <X className="w-6 h-6 md:w-5 md:h-5 text-white/80 md:text-white/60 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>

                        <div className="relative w-full flex items-center justify-center gap-0 md:pl-12">
                            {/* Menu Items */}
                            <nav className="flex flex-col items-center md:items-start gap-0">
                                {menuItems.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                                        className="flex flex-col items-center md:items-start"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            className="whitespace-pre-line uppercase relative inline-block no-underline transition-all duration-300 ease-in-out tracking-[0.3em] md:tracking-wider text-[0.65rem] md:text-[0.60rem] font-light text-white/80 md:text-white/60 hover:text-[#B5A691] text-center md:text-left py-4 md:py-0"
                                        >
                                            {item.label}
                                        </Link>
                                        {index < menuItems.length - 1 && (
                                            <div
                                                className="w-20 md:w-[88px] h-[1px] my-1 md:my-[1.5rem] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.2)_1px,rgba(255,255,255,0.2)_1px,transparent_4px,transparent_5px)] md:bg-[repeating-linear-gradient(90deg,rgba(181,166,145,0.4)_1px,rgba(181,166,145,0.4)_1px,rgba(181,166,145,0.4)_4px,transparent_5px)]"
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
                                    className="object-contain grayscale brightness-[1.3]"
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
