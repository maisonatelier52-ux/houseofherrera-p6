"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 pointer-events-none bg-black/30 pb-2">
            <div className="max-w-5xl w-full mx-auto px-8">
                <div className="w-full flex items-center justify-end gap-4 text-[9px] tracking-[0.2em] text-[#B5A691]/60 font-medium uppercase pt-8 font-din pointer-events-auto">
                    <Link href="/">
                        <span className="cursor-pointer hover:text-[#B5A691] bg-black/50 transition-colors">THE HOUSE OF HERRERA</span>
                    </Link>
                    <span className="text-[#B5A691]/60 bg-black/50">|</span>
                    <span className="cursor-pointer transition-colors hover:text-[#B5A691] bg-black/50">MENU</span>
                    <div className="flex items-center gap-3 h-2 w-12 justify-center bg-black/50 cursor-pointer group">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="bg-[#B5A691]/60 rounded-full shrink-0"
                                style={{ width: 3, height: 3 }}
                                // Removing 'initial' and using 'animate' with array ensures the looping animation 
                                // starts immediately even if the parent has initial={false}
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
    );
}
