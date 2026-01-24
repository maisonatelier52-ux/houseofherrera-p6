"use client";

import { motion } from "framer-motion";

import Link from "next/link";

const menuItems = [
  { label: "ABOUT", id: "about", href: "/about" },
  { label: "HERRERA\nDYNASTY", id: "dynasty", href: "#dynasty" },
  { label: "ORDERS &\nDISTINCTIONS", id: "orders", href: "#orders" },
  { label: "SYMBOLS\nOF THE HOUSE", id: "symbols", href: "#symbols" },
  { label: "FAMILY ESTATES", id: "estates", href: "#estates" },
  { label: "BIBLIOGRAPHY", id: "bibliography", href: "#bibliography" },
];

export default function Home() {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-between relative z-10">

      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-90"
        >
          <source src="/covervideo.mp4" type="video/mp4" />
        </video>
        <div className="paper-overlay" />
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 5,
            pointerEvents: 'none',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.15) 100%)'
          }}
        />
      </div>

      {/* Top Section - Empty or Spacer */}
      <div className="flex-grow flex items-center">
        {/* Vertical Nav - Left Aligned */}
        <nav className="flex flex-col gap-9">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2 + index * 0.1 }}
              className="flex flex-col gap-8"
            >
              {item.id === "about" ? (
                <Link
                  href={item.href}
                  className="whitespace-pre-line uppercase relative inline-block no-underline transition-all duration-300 ease-in-out tracking-wider text-[0.60rem] font-light text-black/60 hover:text-black text-center"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  className="whitespace-pre-line uppercase relative inline-block no-underline transition-all duration-300 ease-in-out tracking-wider text-[0.60rem] font-light text-black/60 hover:text-black text-center"
                >
                  {item.label}
                </a>
              )}
              {index < menuItems.length - 1 && (
                <div
                  className="w-[88px] h-[1px] my-[2.2rem] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.76)_1px,rgba(0,0,0,0.76)_1px,transparent_4px,transparent_5px)]"
                />
              )}
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Bottom Right Watermark */}
      <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p
            className="text-[9px] tracking-[0.1em] text-black/40 font-medium uppercase font-[din-next-w01-light,din-next-w02-light,din-next-w10-light,sans-serif]"
          >
            ©2025 HOUSE OF HERRERA
          </p>
        </motion.div>
      </div>

    </div>
  );
}
