"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart, clearCart } = useCart();

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  async function handleSubmit() {
    if (
      !fullName ||
      !company ||
      !email ||
      !phone ||
      !country ||
      !address
    ) {
      alert("Please complete all required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          company,
          email,
          phone,
          country,
          address,
          cart,
          total,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email.");
      }

      clearCart();

      router.push("/success");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while sending your quote request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-36 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-5xl font-bold text-purple-700 mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Customer Information */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Customer Information
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

              <textarea
                placeholder="Shipping Address"
                rows={4}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border rounded-lg px-4 py-3"
              />

            </div>

          </div>

          {/* Order Summary */}

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              <>
                <div className="space-y-5">

                  {cart.map((item) => (
                    <div
                      key={item.slug}
                      className="flex justify-between border-b pb-4"
                    >
                      <div>

                        <h3 className="font-bold">
                          {item.name}
                        </h3>

                        <p className="text-gray-500">
                          Quantity: {item.quantity}
                        </p>

                      </div>

                      <p className="font-bold text-purple-700">
                        {item.price}
                      </p>

                    </div>
                  ))}

                </div>

                <div className="border-t mt-8 pt-6">

                  <div className="flex justify-between text-2xl font-bold">

                    <span>Total</span>

                    <span className="text-purple-700">
                      ${total.toFixed(2)}
                    </span>

                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full mt-8 bg-purple-700 hover:bg-purple-800 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition"
                  >
                    {loading ? "Sending Quote..." : "Submit Quote Request"}
                  </button>

                </div>
              </>
            )}

            <Link
              href="/cart"
              className="inline-block mt-6 text-purple-700 font-semibold"
            >
              ← Back to Cart
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}