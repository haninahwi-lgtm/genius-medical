"use client";

import { useCart } from "../context/CartContext";

type AddToCartButtonProps = {
  slug: string;
  name: string;
  image: string;
  price: string;
};

export default function AddToCartButton({
  slug,
  name,
  image,
  price,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  function handleClick() {
    addToCart({
      slug,
      name,
      image,
      price,
    });
  }

  return (
    <button
      onClick={handleClick}
      className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition"
    >
      Add to Cart
    </button>
  );
}