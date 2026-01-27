"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 pointer-events-none bg-black/30 md:bg-black/10 pb-2">
                <div className="max-w-5xl w-full mx-auto px-4 md:px-8">
                    <div className="w-full flex items-center justify-end gap-3 md:gap-4 text-[8px] md:text-[9px] tracking-[0.2em] text-[#B5A691]/60 font-medium uppercase pt-6 md:pt-8 font-din pointer-events-auto">
                        <Link href="/">
                            <span className="cursor-pointer hover:text-[#B5A691] bg-black/40 md:bg-black/50 px-2 py-1 transition-colors">THE HOUSE OF HERRERA</span>
                        </Link>
                        <span className="text-[#B5A691]/60">|</span>
                        <span
                            className="cursor-pointer transition-colors hover:text-[#B5A691] bg-black/40 md:bg-black/50 px-2 py-1"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            MENU
                        </span>
                        <div
                            className="flex items-center gap-2 md:gap-3 h-2 w-10 md:w-12 justify-center bg-black/40 md:bg-black/50 cursor-pointer group"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="bg-[#B5A691]/60 rounded-full shrink-0"
                                    style={{ width: 3, height: 3 }}
                                    animate={{
                                        scale: [2, 3, 2],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <MenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    );
}
