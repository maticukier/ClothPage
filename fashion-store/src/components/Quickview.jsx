// src/components/QuickView.jsx
import { useCart } from "../context/cartContext";
import { pushToast } from "../services/toastService";

export default function QuickView({ product, onClose }) {
  const { addToCart } = useCart();
  if (!product) return null;

  const add = () => {
    // Quick view no elige talle/color; agrega 1 unidad básica
    addToCart(product, { qty: 1 });
    pushToast("Añadido al carrito");
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal__grid">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
          />
          <div className="modal__content">
            <div className="chip">Quick view</div>
            <h3 className="modal__title" style={{ marginBottom: 4 }}>
              {product.name}
            </h3>
            <div className="modal__muted">${product.price.toFixed(2)}</div>
            <p className="modal__muted" style={{ marginTop: 16 }}>
              Corte relajado, algodón pesado. Ideal para uso diario con estética minimal.
            </p>

            <div className="modal__actions">
              <button className="btn btn--primary" onClick={add}>
                Añadir al carrito
              </button>
              <button className="btn btn--ghost" onClick={onClose}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
