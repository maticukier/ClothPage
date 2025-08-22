export default function ProductCard({ p, onQuickView }) {
  const handleImgError = (e) => {
    e.currentTarget.src = "/assets/placeholder.jpg";
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();      // ⬅ evita que el hover/animación interfiera
    onQuickView(p);
  };

  return (
    <article className="card">
      <div className="card__media">
        <img
          className="card__img"
          src={p.image}
          alt={p.name}
          width={900}
          height={1125}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={handleImgError}
        />
        {p.badge && <span className="card__badge">{p.badge}</span>}
        <button
          type="button"
          className="card__quick btn btn--ghost"
          onClick={handleQuickView}
          aria-label={`Quick view: ${p.name}`}
        >
          Quick view
        </button>
      </div>
      <div className="card__body">
        <h3>{p.name}</h3>
        <div className="card__price">${p.price.toFixed(2)}</div>
      </div>
    </article>
  );
}
