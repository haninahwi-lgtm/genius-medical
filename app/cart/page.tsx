"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <main className="pt-32 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">

        {/* Page Title */}
        <h1 className="text-5xl font-bold text-purple-700 mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">

            <h2 className="text-3xl font-bold">
              Your cart is empty
            </h2>

            <p className="text-gray-600 mt-4">
              Browse our medical products and add items to your cart.
            </p>

            <Link
              href="/products"
              className="inline-block mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Continue Shopping
            </Link>

          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">

              {cart.map((item) => {
                const price = Number(
                  item.price.replace(/[^0-9.]/g, "")
                );

                const subtotal = price * item.quantity;

                return (
                  <div
                    key={item.slug}
                    className="bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between gap-6"
                  >

                    {/* Product Information */}
                    <div className="flex items-center gap-6">

                      <Image
                        src={item.image}
                        alt={item.name}
                        width={120}
                        height={120}
                        className="rounded-xl border"
                      />

                      <div>

                        <h2 className="text-2xl font-bold">
                          {item.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                          Unit Price
                        </p>

                        <p className="text-purple-700 font-bold text-xl">
                          {item.price}
                        </p>

                      </div>
                    </div>


                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.slug)
                        }
                        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl"
                      >
                        −
                      </button>

                      <span className="text-2xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.slug)
                        }
                        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 text-xl"
                      >
                        +
                      </button>

                    </div>


                    {/* Subtotal */}
                    <div className="text-center">

                      <p className="text-gray-500">
                        Subtotal
                      </p>

                      <p className="text-2xl font-bold text-purple-700">
                        SAR {subtotal.toFixed(2)}
                      </p>

                    </div>


                    {/* Remove */}
                    <button
                      onClick={() =>
                        removeFromCart(item.slug)
                      }
                      className="text-red-600 font-semibold hover:underline"
                    >
                      Remove
                    </button>

                  </div>
                );
              })}

            </div>


            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-12">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                <h2 className="text-3xl font-bold">
                  Order Summary
                </h2>

                <h2 className="text-4xl font-bold text-purple-700">
                  SAR {total.toFixed(2)}
                </h2>

              </div>


              {/* Cart Actions */}
              <div className="flex flex-wrap gap-5 mt-10">

                {/* Continue Shopping */}
                <Link
                  href="/products"
                  className="border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-10 py-4 rounded-xl font-semibold transition"
                >
                  Continue Shopping
                </Link>


                {/* Proceed to Checkout */}
                <Link
                  href="/checkout"
                  className="bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 rounded-xl font-semibold transition"
                >
                  Proceed to Checkout
                </Link>


                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 rounded-xl font-semibold transition"
                >
                  Clear Cart
                </button>

              </div>

            </div>
          </>
        )}

      </div>
    </main>
  );
}