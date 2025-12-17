// app/store/page.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BookCoverImage from "@/public/images/bookcover.jpg";
import { useCart } from "@/components/cart/CartContext";

const StorePage: FC = () => {
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
    <main className="bg-slate-50 pt-24 pb-16">
      <section className="mb-8 border-b border-neutral-200 bg-slate-100">
        <motion.div
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xs font-medium text-slate-600">
            Home <span className="mx-1">/</span>
            <span className="text-slate-900">Store</span>
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">Store</h1>
        </motion.div>
      </section>

      <section className="flex justify-center px-4">
        <motion.div
          className="w-full max-w-xl rounded-md border border-indigo-200 bg-white py-10 shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mx-auto w-full max-w-sm">
            <div className="mb-6 flex justify-center">
              <motion.div
                className="relative h-[420px] w-[280px] overflow-hidden rounded-md shadow-md"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                <Image
                  src={BookCoverImage}
                  alt="A.J. Washington And the Brotherhood of the All Seeing Eye"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>

            <h2 className="text-center text-sm font-semibold text-slate-900">
              A.J. Washington And the Brotherhood
              <br />
              of the All Seeing Eye
            </h2>

            <p className="mt-5 text-center text-sm font-medium text-slate-900">
              $10.99
            </p>

            <div className="mt-6 flex justify-center">
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-[180px] items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
              >
                Add to cart
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default StorePage;
