// app/contact-us/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BookCoverImage from "@/public/images/bookcover.jpg";
import ContactBg from "@/public/images/latestnewsandblogsbg.webp";

export default function ContactPage() {
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
            <span className="text-slate-900">Contact us</span>
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Contact us
          </h1>
        </motion.div>
      </section>

      {/* Get in touch */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2
            className="mb-10 text-center text-3xl font-semibold text-slate-900"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            Get In <span className="font-bold">Touch</span>
          </motion.h2>

          <motion.div
            className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          >
            <div className="absolute inset-0 -z-10">
              <Image
                src={ContactBg}
                alt="Bookshelf background"
                fill
                className="object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-white/65" />
            </div>

            <form
              className="space-y-5 px-8 py-10 md:px-12"
              action="#"
              method="post"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-md border border-neutral-300 bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-40 items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
