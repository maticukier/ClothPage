import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import QuickView from "../components/QuickView";
import ProductDetail from "../components/productDetail";
import Filters from "../components/Filters";
import { products } from "../data/products";

export default function Home(){
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category).filter(Boolean))), []);
  const allSizes   = useMemo(() => Array.from(new Set(products.flatMap(p => p.sizes || []))), []);
  const allColors  = useMemo(() => Array.from(new Set(products.flatMap(p => p.colors || []))), []);

  const [cat, setCat] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);

  const filtered = products.filter(p => {
    if (cat && p.category !== cat) return false;
    if (size && !(p.sizes || []).includes(size)) return false;
    if (color && !(p.colors || []).includes(color)) return false;
    return true;
  });

  return (
    <>
      <Hero/>

      <section id="catalog" className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <h2 className="hero__title" style={{fontSize:28}}>Nueva colección</h2>
              <p className="section__subtitle">Editorial drop — piezas clave de esta temporada</p>
            </div>
          </div>

          <Filters
            categories={categories} activeCategory={cat} onCategory={setCat}
            sizes={allSizes} activeSize={size} onSize={setSize}
            colors={allColors} activeColor={color} onColor={setColor}
            onClear={() => { setCat(null); setSize(null); setColor(null); }}
          />

          <div className="grid">
            {filtered.map(p => (
              <div key={p.id} onDoubleClick={() => setDetail(p)}>
                <ProductCard p={p} onQuickView={setSelected}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickView product={selected} onClose={() => setSelected(null)}/>
      <ProductDetail product={detail} onClose={() => setDetail(null)}/>
    </>
  );
}
