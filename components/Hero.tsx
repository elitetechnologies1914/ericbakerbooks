// components/Hero.tsx
"use client";

import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import LeftBarImage from "@/public/images/leftbar.webp";
import BookCoverImage from "@/public/images/bookcover.jpg";
import ShelfImage from "@/public/images/slabtoputbookon.png";
import { useCart } from "@/components/cart/CartContext";

const Hero: FC = () => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: "aj-washington-book-1",
      title: "A.J. Washington And the Brotherhood of the All Seeing Eye",
      price: 10.99,
      quantity: 1,
      image: BookCoverImage,
    });
  };

  return (
    <main className="bg-slate-50">
      <motion.section
        className="flex min-h-screen flex-col lg:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Left column */}
        <div className="relative w-full overflow-hidden bg-slate-50 lg:w-1/2">
          <Image
            src={LeftBarImage}
            alt="Cozy reading room"
            priority
            className="pointer-events-none absolute inset-y-0 left-0 w-[420px] max-w-full object-cover opacity-80"
          />

          <motion.div
            className="relative z-10 flex min-h-screen flex-col justify-center px-8 py-20 lg:pl-[260px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-slate-500">
              WELCOME TO
            </p>
            <h1 className="mb-4 text-4xl font-bold tracking-wide text-slate-900 sm:text-5xl">
              Eric H. Baker
            </h1>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-slate-700">
              Hello, and thank you for visiting. My name is Eric H. Baker, and I
              am thrilled to introduce you to my debut novel,
              <br />
              <span className="font-semibold">
                AJ Washington and the Brotherhood of the All Seeing Eye.
              </span>
            </p>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 inline-flex w-max items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Read More
            </motion.button>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          className="relative flex w-full items-center justify-center bg-slate-900 lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          <motion.div
            className="relative flex flex-col items-center pt-24 pb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-[380px] aspect-[571/653] overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={ShelfImage}
                alt="Shelf background"
                fill
                priority
                className="object-cover"
              />

              <motion.div
                className="absolute left-1/2 top-[3%] h-[66%] w-[51%] -translate-x-1/2"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              >
                <Image
                  src={BookCoverImage}
                  alt="AJ Washington and the Brotherhood of the All Seeing Eye"
                  fill
                  className="rounded-md object-cover shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                  priority
                />
              </motion.div>
            </div>

            <motion.div
              className="mt-8 max-w-md text-center text-slate-50 drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base font-semibold">
                A.J. Washington And The Brotherhood Of The All Seeing Eye
              </p>
              <p className="mt-1 text-xs font-normal">The All Seeing Eye</p>
            </motion.div>

            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-[240px] items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-xl transition hover:bg-slate-100"
            >
              Add To Cart
            </motion.button>

           
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Hero;
