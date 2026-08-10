"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (slug: string) => void;
  increaseQuantity: (slug: string) => void;
  decreaseQuantity: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart once
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    setLoaded(true);
  }, []);

  // Save cart only AFTER loading is finished
  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, loaded]);

  function addToCart(item: Omit<CartItem, "quantity">) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (product) => product.slug === item.slug
      );

      if (existing) {
        return currentCart.map((product) =>
          product.slug === item.slug
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(slug: string) {
    setCart((currentCart) =>
      currentCart.filter(
        (product) => product.slug !== slug
      )
    );
  }

  function increaseQuantity(slug: string) {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.slug === slug
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  }

  function decreaseQuantity(slug: string) {
    setCart((currentCart) =>
      currentCart
        .map((product) =>
          product.slug === slug
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}