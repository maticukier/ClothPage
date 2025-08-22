import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Toasts from "./components/Toasts";
import CartDrawer from "./components/CartDrawer";
import CartProvider from "./context/CartProvider";
import "./styles/styles.css";

export default function App(){
  return (
    <CartProvider>
      <div style={{minHeight:'100dvh', display:'flex', flexDirection:'column'}}>
        <Navbar/>
        <main style={{flex:1}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
        <CartDrawer/>
        <Toasts/>
      </div>
    </CartProvider>
  );
}
