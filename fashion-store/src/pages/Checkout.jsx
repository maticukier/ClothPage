import { useState } from "react";
import { useCart } from "../context/cartContext";

export default function Checkout(){
  const { items, total, clearCart } = useCart();
  const [form, setForm] = useState({ name:"", email:"", address:"", city:"", zip:"" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const canSubmit = items.length > 0 && form.name && /\S+@\S+\.\S+/.test(form.email) && form.address && form.city && form.zip;

  const submit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="hero__title" style={{fontSize:28}}>¡Gracias por tu compra!</h2>
          <p className="section__subtitle">Hemos enviado un correo a <strong>{form.email}</strong> con el resumen del pedido.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container checkout">
        <div className="checkout__left">
          <h2 className="hero__title" style={{fontSize:28}}>Checkout</h2>
          <form className="form" onSubmit={submit}>
            <div className="form__row">
              <label className="form__label">Nombre y Apellido</label>
              <input className="input input--full" name="name" value={form.name} onChange={onChange} placeholder="Ej: Matías C." required/>
            </div>
            <div className="form__row">
              <label className="form__label">Email</label>
              <input className="input input--full" type="email" name="email" value={form.email} onChange={onChange} placeholder="tu@mail.com" required/>
            </div>
            <div className="form__row">
              <label className="form__label">Dirección</label>
              <input className="input input--full" name="address" value={form.address} onChange={onChange} placeholder="Calle 123" required/>
            </div>
            <div className="form__grid">
              <div>
                <label className="form__label">Ciudad</label>
                <input className="input input--full" name="city" value={form.city} onChange={onChange} required/>
              </div>
              <div>
                <label className="form__label">CP</label>
                <input className="input input--full" name="zip" value={form.zip} onChange={onChange} required/>
              </div>
            </div>
            <div className="modal__actions">
              <button className="btn btn--primary" disabled={!canSubmit}>Confirmar pedido</button>
            </div>
          </form>
        </div>

        <aside className="checkout__right">
          <div className="summary">
            <div className="summary__head">Resumen</div>
            <div className="summary__list">
              {items.map((it, i) => (
                <div key={i} className="summary__row">
                  <img src={it.image} alt={it.name} className="summary__thumb"/>
                  <div className="summary__meta">
                    <div className="summary__name">{it.name}</div>
                    <div className="summary__sub">{it.color || ""} {it.size ? `· ${it.size}` : ""} × {it.qty}</div>
                  </div>
                  <div className="summary__price">${(it.price * it.qty).toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="summary__total">
              <span>Total</span><strong>${total.toFixed(2)}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
