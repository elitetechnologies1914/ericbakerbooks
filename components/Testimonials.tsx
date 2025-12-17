// components/Testimonials.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import KyleImage from "@/public/images/kyle.png";
import SophiaImage from "@/public/images/sophia.png";
import StephenImage from "@/public/images/stephen.png";

const testimonials = [
  {
    name: "Kyle Roberts, DVM",
    text: `Eric Baker's storytelling is nothing short of magical. His characters are relatable and draw you into their world. I couldn't put the book down and found myself eagerly anticipating each twist and turn!`,
    image: KyleImage,
  },
  {
    name: "Sophia Anderson",
    text: `AJ Washington and the Brotherhood of the All-Seeing Eye is a thrilling adventure that kept me on the edge of my seat. Eric Baker has a gift for weaving ancient mythology into a modern narrative. Highly recommend!`,
    image: SophiaImage,
  },
  {
    name: "Stephen Brekke",
    text: `This book is a captivating blend of fantasy and reality. Eric Baker has created a vibrant universe full of intriguing characters and exciting plots. I can't wait for the sequel!`,
    image: StephenImage,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="relative bg-white py-20 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 hidden h-40 w-[35%] -translate-y-1/2 bg-indigo-50/70 lg:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="mb-4 text-center text-3xl font-semibold text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          What Readers <span className="font-bold">Are Saying</span>
        </motion.h2>
        <motion.p
          className="mb-10 text-center text-sm text-slate-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Early readers share their experience with{" "}
          <span className="font-medium">
            AJ Washington and the Brotherhood of the All-Seeing Eye
          </span>
          .
        </motion.p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              whileHover={{ y: -4, boxShadow: "0 22px 55px rgba(0,0,0,0.18)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-14 w-14 overflow-hidden rounded-full border border-white shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">
                {item.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
