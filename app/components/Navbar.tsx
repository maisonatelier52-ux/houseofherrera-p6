"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div className="max-w-5xl w-full mx-auto px-8">
                <div className="w-full flex items-center justify-end gap-4 text-[9px] tracking-[0.2em] text-[#B5A691]/60 font-medium uppercase pt-8 font-din">
                    <Link href="/">
                        <span className="cursor-pointer hover:text-[#B5A691] transition-colors">THE HOUSE OF HERRERA</span>
                    </Link>
                    <span className="text-[#B5A691]/60">|</span>
                    <span className="cursor-pointer transition-colors hover:text-[#B5A691]">MENU</span>
                    <div className="flex items-center gap-3 h-2 w-12 justify-center">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="bg-[#B5A691]/60 rounded-full shrink-0"
                                animate={{
                                    width: [4, 8, 4],
                                    height: [4, 8, 4],
                                }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
