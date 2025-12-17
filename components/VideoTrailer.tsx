// components/VideoTrailer.tsx
"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const VideoTrailer: FC = () => {
  return (
    <section id="book-trailer" className="relative bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="mb-10 text-center text-3xl font-semibold text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Video Book <span className="font-bold">Trailer</span>
        </motion.h2>

        <div className="relative">
          <div className="pointer-events-none absolute -left-60 top-1/2 hidden h-44 w-[45%] -translate-y-1/2 bg-indigo-50 lg:block" />

          <motion.div
            className="relative mx-auto max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <video
              className="w-full rounded-xl shadow-[0_24px_70px_rgba(0,0,0,0.3)]"
              controls
              preload="metadata"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTrailer;
