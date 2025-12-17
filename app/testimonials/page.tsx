// app/testimonials/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookCoverImage from "@/public/images/bookcover.jpg";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main className="bg-slate-50 pt-24">
      {/* Top banner */}
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
            <span className="text-slate-900">Testimonials</span>
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Testimonials
          </h1>
        </motion.div>
      </section>

      <Testimonials />
    </main>
  );
}
