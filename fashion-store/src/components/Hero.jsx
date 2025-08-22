export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <div className="chip mb-4">New Drop</div>
          <h1 className="hero__title">
            Moda urbana con energía <span className="hero__gradient">Aura</span>
          </h1>
          <p className="hero__text">
            Piezas atemporales, fits relajados y materiales premium. Inspirado en el ritmo de la ciudad.
          </p>
          <div className="hero__cta">
            <a href="#catalog" className="btn btn--primary">Ver catálogo</a>
            <a href="#about" className="btn btn--ghost">Sobre la marca</a>
          </div>
        </div>

        <div className="hero__img">
          <img
            src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop"
            alt="Lookbook"
          />
        </div>
      </div>
    </section>
  );
}
