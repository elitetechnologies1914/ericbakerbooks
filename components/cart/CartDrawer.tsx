"use client";

import Image from "next/image";
import { useCart } from "./CartContext";

const CartDrawer = () => {
  const {
    items,
    totalItems,
    totalPrice,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-black/40">
      <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-sm text-neutral-600 hover:text-black"
          >
            Close
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-neutral-600">
              Your cart is currently empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-4 last:border-0"
              >
                <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-neutral-500">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="flex h-6 w-6 items-center justify-center border text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="flex h-6 w-6 items-center justify-center border text-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-xs text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="space-y-2 border-t px-6 py-4">
            <div className="flex justify-between text-sm font-medium">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="mt-3 w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black">
              Checkout (coming soon)
            </button>
            <button
              onClick={clearCart}
              className="w-full text-xs text-neutral-500 hover:text-neutral-800"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
