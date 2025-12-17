// components/AboutAuthor.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuthorImage from "@/public/images/author.jpg";

const AboutAuthor: FC = () => {
  return (
    <section id="about-author" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row">
        {/* LEFT: image */}
        <motion.div
          className="relative flex w-full justify-center lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute -left-50 top-1/2 hidden h-[230px] w-[120%] -translate-y-1/2 bg-indigo-50 lg:block" />

          <div className="relative max-w-xl overflow-hidden rounded-t-[220px] rounded-b-2xl shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <Image
              src={AuthorImage}
              alt="Eric H. Baker"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT: text */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="mb-6 text-3xl font-semibold text-slate-900">
            About The <span className="font-bold">Author</span>
          </h2>

          <div className="space-y-4 text-sm leading-relaxed text-slate-800">
            <p>
              For most of my adult life, I have dedicated myself to working with
              “at risk” youth, primarily in classroom settings. This experience
              has profoundly shaped my perspective on life and storytelling.
            </p>
            <p>
              Engaging with young minds, I witnessed the challenges they faced
              and the resilience they exhibited, which inspired me to weave
              narratives that resonate with their struggles and triumphs.
            </p>
            <p>
              Unfortunately, due to unforeseen medical issues, I had to step
              away from teaching. This transition was difficult, but it opened a
              door to a new chapter in my life: writing.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAuthor;
