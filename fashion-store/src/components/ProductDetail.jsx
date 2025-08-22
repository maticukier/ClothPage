import { useState } from "react";
import { useCart } from "../context/cartContext";
import { pushToast } from "../services/toastService";

export default function ProductDetail({ product, onClose }) {
  const { addToCart } = useCart();
  const [size, setSize] = useState(product?.sizes?.[0] || null);
  const [color, setColor] = useState(product?.colors?.[0] || null);
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const add = () => {
    const amount = Math.max(1, Number(qty) || 1);
    addToCart(product, { size, color, qty: amount });
    pushToast("Añadido al carrito");
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal__grid">
          <img src={product.image} alt={product.name} style={{ width:"100%", aspectRatio:"1/1", objectFit:"cover" }}/>
          <div className="modal__content">
            <div className="chip">Detalle</div>
            <h3 className="modal__title" style={{ marginBottom: 4 }}>{product.name}</h3>
            <div className="modal__muted">${product.price.toFixed(2)}</div>

            {product.colors?.length ? (
              <div style={{ marginTop: 16 }}>
                <label className="form__label">Color</label>
                <div className="form__row">
                  {product.colors.map((c) => (
                    <button key={c} type="button"
                      className={`pill ${color === c ? "pill--active" : "pill--outline"}`}
                      onClick={() => setColor(c)}>{c}</button>
                  ))}
                </div>
              </div>
            ) : null}

            {product.sizes?.length ? (
              <div style={{ marginTop: 12 }}>
                <label className="form__label">Talle</label>
                <div className="form__row">
                  {product.sizes.map((s) => (
                    <button key={s} type="button"
                      className={`pill ${size === s ? "pill--active" : "pill--outline"}`}
                      onClick={() => setSize(s)}>{s}</button>
                  ))}
                </div>
              </div>
            ) : null}

            <div style={{ marginTop: 12 }}>
              <label className="form__label">Cantidad</label>
              <input className="input" type="number" min="1" value={qty} onChange={(e) => setQty(e.target.value)} />
            </div>

            <div className="modal__actions">
              <button className="btn btn--primary" onClick={add}>Añadir al carrito</button>
              <button className="btn btn--ghost" onClick={onClose}>Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
