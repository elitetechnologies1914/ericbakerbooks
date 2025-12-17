// app/about-book/page.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookCoverImage from "@/public/images/bookcover.jpg";
import AvailableAtSection from "@/components/AvailableAtSection";

const AboutBookPage: FC = () => {
  return (
    <main className="bg-slate-50 pt-24">
      {/* Top banner – animates on load */}
      <section className="relative border-b border-neutral-200 bg-slate-100">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={BookCoverImage}
            alt="AJ Washington book background"
            fill
            className="object-cover opacity-25 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/50" />
        </div>

        <motion.div
          className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-medium text-slate-600">
            Home <span className="mx-1">/</span>
            <span className="text-slate-900">About Book</span>
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            About Book
          </h1>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-start">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="mb-6 text-3xl font-semibold text-slate-900 sm:text-4xl">
              About The <span className="font-bold">Book</span>
            </h2>

            <div className="space-y-3 text-sm leading-relaxed text-slate-800">
              <p>
                <span className="font-semibold">
                  AJ Washington and the Brotherhood of the All Seeing Eye
                </span>{" "}
                follows AJ Washington, a foster child coping with grief, trauma
                and an imagination that seems to blur the line between fantasy
                and reality. After the death of his beloved foster father, AJ
                begins to experience strange visions and encounters that seem
                pulled from the world of ancient Egypt.
              </p>
              <p>
                Guided by his mentor, Dr. Terrance Conners, AJ slowly uncovers a
                destiny much larger than he ever imagined: he is the
                reincarnation of Pharaoh Ramses. As the truths of his past life
                collide with the challenges of his present, AJ must confront
                his deepest fears—both real and imagined.
              </p>
              <p>
                With powerful symbols like the Eye of Horus, a secret
                Brotherhood and a hidden legacy of magic and responsibility, AJ
                is drawn into a world where gods, history and the supernatural
                walk beside him. His journey is one of identity, courage and the
                struggle to choose who he will become when the weight of the
                past presses on his future.
              </p>
              <p className="italic">
                This story is a thrilling blend of adventure, mythology and
                emotional truth, perfect for readers who love fantasy with a
                beating heart at its core.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative flex w-full justify-center lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <div className="absolute left-120 top-1/2 h-72 w-[140%] -translate-x-1/2 -translate-y-1/2 bg-indigo-50" />
            <motion.div
              className="relative h-[520px] w-[340px] shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={BookCoverImage}
                alt="A.J. Washington And the Brotherhood of the All Seeing Eye"
                fill
                className="rounded-md object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Full list of stores */}
      <AvailableAtSection variant="full" />
    </main>
  );
};

export default AboutBookPage;
