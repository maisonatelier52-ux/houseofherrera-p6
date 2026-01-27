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
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={pathname}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
                onAnimationComplete={() => {
                    // Logic for "extra flow": auto-scroll to the first content section after landing
                    const scrollContainer = document.querySelector('.snap-y');
                    if (scrollContainer) {
                        // Small delay to ensure the page has settled
                        setTimeout(() => {
                            scrollContainer.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth'
                            });
                        }, 200);
                    }
                }}
                className="w-full min-h-screen overflow-hidden"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
