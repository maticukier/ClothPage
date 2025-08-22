import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer() {
  const { items, total, removeFromCart, clearCart, isCartOpen, closeCart } = useCart();
  const navigate = useNavigate();
  if (!isCartOpen) return null;

  const goCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <div className="drawer" onClick={closeCart}>
      <aside className="drawer__panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer__header">
          <h3>Carrito</h3>
          <button className="drawer__close" onClick={closeCart}>×</button>
        </div>

        <div className="drawer__list">
          {items.length === 0 && <div className="drawer__empty">Tu carrito está vacío.</div>}
          {items.map((it, idx) => (
            <div key={idx} className="drawer__item">
              <img src={it.image} alt={it.name} className="drawer__thumb"/>
              <div className="drawer__meta">
                <div className="drawer__name">{it.name}</div>
                <div className="drawer__sub">
                  {it.color ? `Color: ${it.color} · ` : ""}{it.size ? `Talle: ${it.size} · ` : ""}Qty: {it.qty}
                </div>
              </div>
              <div className="drawer__price">${(it.price * it.qty).toFixed(2)}</div>
              <button className="drawer__remove" onClick={() => removeFromCart(idx)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div className="drawer__footer">
          <div className="drawer__total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <div className="drawer__actions">
            <button className="btn" onClick={clearCart} disabled={!items.length}>Vaciar</button>
            <button className="btn btn--primary" disabled={!items.length} onClick={goCheckout}>Checkout</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
