"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAboutPage = pathname === "/about";

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                className="w-full h-full"
            >
                {/* Page Content Slide */}
                <motion.div
                    initial={{ x: isAboutPage ? "100%" : "-20%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: isAboutPage ? "-20%" : "100%", opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>

                {/* White Overlay Curtain - Higher Z-index */}
                <motion.div
                    className="fixed inset-0 bg-white z-50 pointer-events-none"
                    initial={{ scaleX: 0, originX: isAboutPage ? 0 : 1 }}
                    animate={{ scaleX: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } }}
                    exit={{ scaleX: 1, originX: isAboutPage ? 1 : 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
