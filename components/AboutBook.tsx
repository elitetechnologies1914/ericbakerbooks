// components/AboutBook.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookCoverImage from "@/public/images/bookcover.jpg";

const AboutBook: FC = () => {
  return (
    <section
      id="about-book"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* LEFT: text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">
            About The <span className="font-bold">Book</span>
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-slate-800">
            Join AJ Washington, a foster child with an overactive imagination,
            on an extraordinary journey that blurs the lines between reality and
            myth. After the death of his beloved foster father, AJ begins to
            experience strange visions and encounters with ancient Egyptian
            gods.
          </p>
          <p className="text-sm leading-relaxed text-slate-800">
            As he grapples with his traumatic past and the monsters lurking in
            his closet, he discovers his true identity as the reincarnation of
            Pharaoh Ramses.
          </p>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Read more
          </motion.button>
        </motion.div>

        {/* RIGHT: book */}
        <motion.div
          className="relative flex w-full justify-center lg:w-1/2 lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute right-[-100%] top-1/2 hidden h-48 w-[200%] -translate-y-1/2 bg-indigo-50 lg:block" />

          <motion.div
            className="relative h-[460px] w-[300px] shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <Image
              src={BookCoverImage}
              alt="AJ Washington and the Brotherhood of the All Seeing Eye book cover"
              fill
              className="rounded-md object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBook;
