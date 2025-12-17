"use client";

import { useState } from "react";
import Image from "next/image";
import BookCoverImage from "@/public/images/bookcover.jpg";
import { useCart } from "@/components/cart/CartContext";

const ProductDetail = () => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (quantity < 1) return;

    addItem({
      id: "aj-washington-book-1",
      title: "A.J. Washington And the Brotherhood of the All Seeing Eye",
      price: 10.99,
      quantity,
      image: BookCoverImage,
    });
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* LEFT: cover */}
        <div className="md:w-1/3">
          <div className="relative w-full max-w-xs">
            <Image
              src={BookCoverImage}
              alt="A.J. Washington And the Brotherhood of the All Seeing Eye"
              className="w-full rounded-md shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT: details */}
        <div className="md:w-2/3">
          <h1 className="mb-3 text-3xl font-semibold text-neutral-900">
            A.J. Washington And the Brotherhood of the All Seeing Eye
          </h1>

          <p className="mb-4 text-sm leading-relaxed text-neutral-700">
            AJ Washington is a boy who thinks there are monsters in his closet.
            Lots of kids think that they have monsters in their closets and
            under their beds. But his are real. AJ learns that he is a
            reincarnated pharaoh who must fulfill his destiny. This starts him
            on the adventure of a lifetime, where he makes new friends, new
            enemies, and even meets some ancient Egyptian gods.
          </p>

          <p className="mb-6 text-xl font-semibold text-neutral-900">$10.99</p>

          <div className="mb-8 flex items-center gap-4">
            <div className="flex items-center border border-neutral-400 px-3 py-2 text-sm">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value) || 1))
                }
                className="w-12 bg-transparent text-center outline-none"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="inline-flex items-center justify-center bg-neutral-900 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-black"
            >
              Add to cart
            </button>
          </div>

          {/* You can continue with Description / Reviews tabs here */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
