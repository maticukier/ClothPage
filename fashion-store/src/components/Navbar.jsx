import logo from "../assets/logo.svg";
import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "../context/cartContext";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  const { count, openCart } = useCart();
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <img src={logo} alt="Logo" className="brand__img" />
          <span className="brand__text">Aura</span>
        </Link>

        <nav className="nav__links">
          <NavLink to="/" end>New</NavLink>
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="nav__actions">
          <button className="btn btn--ghost" aria-label="Cart" onClick={openCart}>
            <ShoppingBag size={18}/> Cart
            <span className="nav__cartBadge">{count}</span>
          </button>
          <button className="nav__menu" aria-label="Menu"><Menu size={18}/></button>
        </div>
      </div>
    </header>
  );
}
