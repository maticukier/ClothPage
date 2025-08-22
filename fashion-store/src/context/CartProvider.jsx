// src/context/CartProvider.jsx
import { useMemo, useState, useEffect } from "react";
import { CartContext } from "./cartContext";

const LS_KEY = "aura_cart_v1";

export default function CartProvider({ children }) {
  // === estado carrito ===
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }); // {id, name, price, image, size, color, qty}

  // persistir cada cambio
  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  // === UI drawer ===
  const [isCartOpen, setCartOpen] = useState(false);
  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const toggleCart = () => setCartOpen(v => !v);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setCartOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const addToCart = (product, { size = null, color = null, qty = 1 } = {}) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.id === product.id && x.size === size && x.color === color);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, image: product.image, size, color, qty }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (idx) => setItems(prev => prev.filter((_, i) => i !== idx));
  const clearCart = () => setItems([]);

  const count = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items]);
  const total = useMemo(() => items.reduce((a, b) => a + b.price * b.qty, 0), [items]);

  const value = { items, addToCart, removeFromCart, clearCart, count, total, isCartOpen, openCart, closeCart, toggleCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
