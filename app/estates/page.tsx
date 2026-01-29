"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Estates() {
    const scrollToNext = () => {
        const container = document.querySelector('.snap-y');
        if (container) {
            container.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full bg-black snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth flex flex-col gap-12 md:gap-32">
            <Navbar />

            {/* Section 1: Hero */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative px-4 text-center">
                <div className="max-w-5xl w-full mx-auto">
                    <div className="flex flex-col items-center gap-1">
                        {/* Crest Image */}
                        <div className="relative w-40 h-56 md:w-80 md:h-80">
                            <Image
                                src="/images/about/hofHP (1)-1ee.png"
                                alt="Crest"
                                fill
                                className="object-contain brightness-[0.9] opacity-90"
                                priority
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <h1 className="text-xl md:text-3xl font-libre text-[#B5A691] tracking-tight">
                                House of Herrera
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#B5A691]/50 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={scrollToNext}
                >
                    <svg width="30" height="15" viewBox="0 0 30 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15 13L29 1" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>
            </section>

            {/* Section 2: Hacienda De La Vega */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                            priority
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Hacienda De La Vega<br />
                            (Caracas)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            The Hacienda de La Vega, is a historical monument in Caracas, Venezuela. It was one of the first family properties of the Herrera family in Latin America. It is still a strong symbolic place for the current generations.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            It is one of the oldest haciendas in Venezuela, dating back to the time of the Spanish colonization in the Caracas Valley, it refers to the time when the first generations of the Herrera have been sent by the Spanish crown. In 1899, the Hacienda was acquired by Jorge Uslar (Herrera&apos;s ancestor) who received it after an agreement with the late Banco de Caracas. He undertook colossal reconstruction and embellishment works.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed">
                            Later on, the space became a real cultural place for the local life, becoming the meeting point of culture and social life. The Hacienda remains in the Herrera von Uslar family, today is open for the public as a history landmark.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.4, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] mb-12 md:mb-16 overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Estates-1.avif"
                            alt="Hacienda De La Vega"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                            priority
                        />
                    </motion.div>

                    {/* Dual Gallery Block */}
                    <div className="w-full max-w-5xl flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full mb-6 text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 0.8, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                                className="relative aspect-[16/10]"
                            >
                                <Image
                                    src="/images/estates/Estates-2.avif"
                                    alt="Hacienda Detail 1"
                                    fill
                                    className="object-cover grayscale brightness-75 transition-transform duration-1000"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 0.8, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
                                className="relative aspect-[16/10]"
                            >
                                <Image
                                    src="/images/estates/Estates-3.avif"
                                    alt="Hacienda Detail 2"
                                    fill
                                    className="object-cover grayscale brightness-75 transition-transform duration-1000"
                                />
                            </motion.div>
                        </div>

                        {/* Caption */}
                        <div className="w-full flex justify-start">
                            <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                                <span>ESTATE IN VENEZUELA</span>
                                <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                                <span>HACIENDA DE LA VEGA / CARACAS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Castle St. Barbara */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Castle St. Barbara<br />
                            (Teguise / Lanzarote)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-center">
                            The Castillo Santa Barbara sits high up on Mount Guanapay overlooking Teguise, the old capital and the island of Lanzarote. King Felipe II ordered the castle to be built by Don Sanco de Herrera in the 16th Century as a watch tower to help protect the islanders from pirates and privateers such as Sir Francis Drake who was known as El Draque (The Dragon) to the Spanish.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-center">
                            At the time, Teguise was both the capital of Lanzarote and the HQ of the Spanish administration of the whole Canary.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.4, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] border border-[#B5A691]/10 overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Estates-4.avif"
                            alt="Castle St. Barbara"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Caption */}
                    <div className="w-full flex justify-start mt-4">
                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                            <span>ESTATE IN CANARY ISLANDS</span>
                            <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                            <span> CASTLE ST.BARBARA, TEGUISE / LANZAROTE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Castle of Gleichen */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Castle of Gleichen<br />
                            (Germany)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Gleichen Castle owes its fame to the legend of the bigamous Count von Gleichen, who returned home from the Crusades with a second wife. The three castles known collectively as the &quot;Drei Gleichen&quot; are Gleichen Castle, Mühlburg Castle and Wachsenburg Castle. They are approx. 20 km from Erfurt in the Drei Gleichen conservation area.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.4, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] mb-8 md:mb-8 overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Estates-6.avif"
                            alt="Castle of Gleichen"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Dual Gallery Block */}
                    <div className="w-full max-w-5xl flex flex-col items-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full mb-6">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 0.8, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.4, ease: "easeOut" }}
                                className="relative aspect-[16/10] overflow-hidden"
                            >
                                <Image
                                    src="/images/estates/Estates-7.avif"
                                    alt="Gleichen Detail 1"
                                    fill
                                    className="object-cover grayscale brightness-75 transition-transform duration-1000"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 0.8, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 2.4, ease: "easeOut" }}
                                className="relative aspect-[16/10] overflow-hidden"
                            >
                                <Image
                                    src="/images/estates/Estates-8.avif"
                                    alt="Gleichen Detail 2"
                                    fill
                                    className="object-cover grayscale brightness-75 transition-transform duration-1000"
                                />
                            </motion.div>
                        </div>

                        {/* Caption */}
                        <div className="w-full flex justify-start">
                            <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                                <span>ESTATE IN GERMANY</span>
                                <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                                <span>CASTLE OF GLEICHEN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Castle of Ampudia */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Castle of Ampudia<br />
                            (Palencia, Spain)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Gothic noble fortress, built in the 15th century by the descendants to Pedro García Herrera, major-general of Castile and nephew of the bishop of Palencia Sancho de Rojas, founder of the Manor of Ampudia. The building is shaped as a trapezoid, with four square turrets in the corners and the front is symmetrical.
                        </p>

                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Today the castle houses a collection of art objects and antiques. Don Pedro de Ayala, the Count of Salvatierra, was one of the owners of the castle. He fought in favour of the comunera cause in the battle of Ampudia, which confronted the followers of the emperor and the troops of the Acuña Bishop.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Estates-9.avif"
                            alt="Castle of Ampudia"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Caption */}
                    <div className="w-full flex justify-start mt-4">
                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                            <span>ESTATE IN PALENCIA, SPAIN</span>
                            <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                            <span>CASTLE OF AMPUDIA</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Castle of Freudenthal */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90">
                            Castle of Freudenthal<br />
                            (Uslar, Germany)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Uslar was first mentioned in 1006/1007. In 1599, the Castle of Freudenthal was built, which burned down in 1612. In 1819, others parts of the town of Uslar was also burned down.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Estates-12.avif"
                            alt="Castle of Freudenthal"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Caption */}
                    <div className="w-full flex justify-start mt-4">
                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                            <span>ESTATE IN USLAR, GERMANY</span>
                            <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                            <span>CASTLE OF FREUDENTHAL</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Uslar-Gleichen Castle */}
            <section className="w-full flex flex-col items-center bg-black pt-12 pb-32 snap-start px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                    {/* Ornate Divider Header */}
                    <div className="mb-6 md:mb-10 relative w-full max-w-[320px] md:max-w-[480px] aspect-[584/74]">
                        <Image
                            src="/images/about/HofH-Lower3.png"
                            alt="Ornate Header"
                            fill
                            className="object-contain brightness-90"
                        />
                    </div>

                    {/* Section Title */}
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-[2.2rem] md:text-[2.0rem] font-libre text-[#B5A691] leading-[1.1] tracking-tight font-light opacity-90 uppercase">
                            Uslar-Gleichen Castle<br />
                            (Gleichen, Germany)
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                    <div className="max-w-xl text-[12px] md:text-[12.3px] text-left space-y-4 mb-12 md:mb-16">
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Built around 1100 by the Counts of Reinhausen, who had turned their ancestral seat in Reinhausen into an Augustinian monastery, and thereafter the castles changed hands several times. Finally around 1270, the Gleichen went to the Lords of Uslar.
                        </p>
                        <p className="font-helvetica font-light tracking-wide text-[#B5A691]/60 leading-relaxed text-left md:text-left">
                            Soon afterwards the House of Uslar divided the assets between the two lines of Altengleichen and Neuengleichen. Neuengleichen fell in 1451 to the Landgraves of Hesse, whilst Altengleichen remained under Guelph rule. Not until the wake of the course of the Vienna Congress was ownership of Neuengleichen relinquished to the Kingdom of Hanover and from then on re-transferred back to the House of Uslar (at Altengleichen), which since 1825 had been called Uslar-Gleichen.
                        </p>
                    </div>

                    {/* Estate Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 0.8, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.0, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-[16/10] md:aspect-[16/9] overflow-hidden"
                    >
                        <Image
                            src="/images/estates/Gleichen2.avif"
                            alt="Uslar-Gleichen Castle"
                            fill
                            className="object-cover grayscale brightness-75 transition-transform duration-1000"
                        />
                    </motion.div>

                    {/* Caption */}
                    <div className="w-full flex justify-start mt-4">
                        <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.2em] text-[#B5A691]/50 font-din uppercase">
                            <span>ESTATE IN THURINGIA, GERMANY</span>
                            <span className="w-[1px] h-3 bg-[#B5A691]/50" />
                            <span>USLAR-GLEICHEN CASTLE</span>
                        </div>
                    </div>

                    {/* Historical Engraving Block */}
                    <div className="w-full max-w-5xl flex flex-col items-center mt-4 md:mt-4">
                        <div className="relative w-full aspect-[21/9] opacity-80 mb-6">
                            <Image
                                src="/images/estates/Uslar Gleichen.avif"
                                alt="Uslar Gleichen Engraving"
                                fill
                                className="object-cover grayscale brightness-70"
                            />
                        </div>

                        {/* Engraving Tag */}
                        <div className="w-full flex justify-start">
                            <div className="text-[8px] md:text-[9px] tracking-[0.15em] text-[#B5A691]/40 font-din uppercase leading-relaxed max-w-md text-left">
                                COPPERPLATE ENGRAVING BY MATTHÄUS MERIAN DATING TO PRE-1650:<br />
                                THE ALTE GLEICHEN (CENTRE), THE NEUE GLEICHEN (RIGHT)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Contact & Footer */}
            <section className="min-h-screen w-full flex flex-col items-center justify-center snap-start relative overflow-hidden px-4">
                <div className="max-w-6xl w-full mx-auto px-8 flex flex-col items-center flex-grow justify-center relative">

                    {/* Background Style Large Title */}
                    <div className="mb-10 md:mb-15 text-center select-none pointer-events-none">
                        <h2 className="text-[3.5rem] md:text-[11rem] font-libre text-[#B5A691]/50 leading-[0.85] tracking-tight">
                            House of<br />
                            Herrera
                        </h2>
                    </div>

                    {/* Secondary Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-18 md:gap-y-6 text-[9px] md:text-[10px] tracking-[0.1em] text-[#B5A691]/70 font-extralight mb-12 md:mb-14 font-din z-10 w-full max-w-5xl">
                        <Link href="/about" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">About</Link>
                        <Link href="/dynasty" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Dynasty</Link>
                        <Link href="/symbols" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Symbols of the House</Link>
                        <Link href="/estates" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Family Estates</Link>
                        <Link href="#" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors whitespace-nowrap">Orders and Distinctions</Link>
                        <Link href="/bibliography" className="cursor-pointer hover:text-[#B5A691]/100 transition-colors">Bibliography</Link>
                    </nav>

                    {/* Connect Section */}
                    <div className="flex flex-col items-center gap-0 z-10">
                        <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-[#B5A691] font-light font-din opacity-80 uppercase">CONNECT WITH US</span>

                        <div className="relative w-40 h-40 md:w-50 md:h-50">
                            <Image
                                src="/images/about/hofHP (1)-1ee.png"
                                alt="Crest"
                                fill
                                className="object-contain brightness-[0.9] opacity-90"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Absolute Bottom Footer Text */}
                <div className="absolute bottom-6 md:bottom-8 text-center w-full px-4">
                    <p className="text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.25em] text-[#B5A691]/80 font-light uppercase font-din leading-relaxed">
                        THE OFFICIAL WEBSITE OF THE HOUSE OF HERRERA
                    </p>
                </div>
            </section>
        </div>
    );
}
