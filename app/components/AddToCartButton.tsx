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

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    addToCart({
      slug,
      name,
      image,
      price,
    });

    const cartIcon = document.getElementById("cart-icon");

    if (!cartIcon) {
      return;
    }

    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const flyingImage = document.createElement("img");

    flyingImage.src = image;
    flyingImage.alt = name;

    flyingImage.style.position = "fixed";
    flyingImage.style.left = `${buttonRect.left + buttonRect.width / 2 - 40}px`;
    flyingImage.style.top = `${buttonRect.top + buttonRect.height / 2 - 40}px`;

    flyingImage.style.width = "80px";
    flyingImage.style.height = "80px";

    flyingImage.style.objectFit = "contain";
    flyingImage.style.borderRadius = "12px";
    flyingImage.style.backgroundColor = "white";
    flyingImage.style.padding = "6px";
    flyingImage.style.boxShadow =
      "0 10px 25px rgba(0, 0, 0, 0.2)";

    flyingImage.style.zIndex = "9999";
    flyingImage.style.pointerEvents = "none";

    flyingImage.style.transition =
      "left 700ms cubic-bezier(0.4, 0, 0.2, 1), " +
      "top 700ms cubic-bezier(0.4, 0, 0.2, 1), " +
      "width 700ms cubic-bezier(0.4, 0, 0.2, 1), " +
      "height 700ms cubic-bezier(0.4, 0, 0.2, 1), " +
      "opacity 700ms ease, " +
      "transform 700ms ease";

    document.body.appendChild(flyingImage);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        flyingImage.style.left = `${
          cartRect.left + cartRect.width / 2 - 15
        }px`;

        flyingImage.style.top = `${
          cartRect.top + cartRect.height / 2 - 15
        }px`;

        flyingImage.style.width = "30px";
        flyingImage.style.height = "30px";

        flyingImage.style.transform = "rotate(15deg)";
        flyingImage.style.opacity = "0";
      });
    });

    setTimeout(() => {
      flyingImage.remove();

      // Bounce the cart when the product arrives
      cartIcon.animate(
        [
          {
            transform: "scale(1)",
          },
          {
            transform: "scale(1.35)",
          },
          {
            transform: "scale(0.9)",
          },
          {
            transform: "scale(1.15)",
          },
          {
            transform: "scale(1)",
          },
        ],
        {
          duration: 500,
          easing: "ease-out",
        }
      );
    }, 750);
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