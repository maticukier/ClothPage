export default function About(){
  return (
    <section className="section">
      <div className="container" style={{maxWidth:900}}>
        <h1 className="hero__title" style={{fontSize:36}}>Sobre Aura</h1>
        <p className="section__subtitle">Diseño editorial + e‑commerce rápido</p>

        <p className="mt-6" style={{color:"#596072"}}>
          Aura es una tienda ficticia pensada para demos: imagen limpia, catálogo con filtros,
          quick view, PDP en modal y carrito persistente en localStorage. Ideal para mostrar en tu
          portfolio de Fiverr lo que podés construir para <em>fashion brands</em>, restaurantes y
          negocios locales con foco estético.
        </p>

        <ul className="mt-6" style={{lineHeight:1.9}}>
          <li>⚡ Performance: imágenes WebP, lazy load y tamaños responsivos.</li>
          <li>🧭 SPA con React Router (Home / Checkout / 404).</li>
          <li>🛒 Carrito global con drawer y persistencia.</li>
          <li>🎯 Estilos en CSS puro + tokens para cambiar la paleta fácil.</li>
        </ul>
      </div>
    </section>
  );
}
