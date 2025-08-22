export default function Filters({
  categories, activeCategory, onCategory,
  sizes, activeSize, onSize,
  colors, activeColor, onColor,
  onClear
}) {
  return (
    <div className="filters">
      <div className="filters__group">
        <span className="filters__label">Categoría</span>
        <div className="filters__row">
          <button className={`chip ${!activeCategory ? "" : "chip--outline"}`} onClick={() => onCategory(null)}>Todas</button>
          {categories.map((c) => (
            <button key={c} className={`chip ${activeCategory === c ? "" : "chip--outline"}`} onClick={() => onCategory(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="filters__group">
        <span className="filters__label">Talle</span>
        <div className="filters__row">
          <button className={`pill ${!activeSize ? "pill--active" : "pill--outline"}`} onClick={() => onSize(null)}>Todos</button>
          {sizes.map((s) => (
            <button key={s} className={`pill ${activeSize === s ? "pill--active" : "pill--outline"}`} onClick={() => onSize(s)}>{s}</button>
          ))}
        </div>
      </div>

      <div className="filters__group">
        <span className="filters__label">Color</span>
        <div className="filters__row">
          <button className={`pill ${!activeColor ? "pill--active" : "pill--outline"}`} onClick={() => onColor(null)}>Todos</button>
          {colors.map((c) => (
            <button key={c} className={`pill ${activeColor === c ? "pill--active" : "pill--outline"}`} onClick={() => onColor(c)}>{c}</button>
          ))}
        </div>
      </div>

      <div className="filters__actions">
        <button className="btn" onClick={onClear}>Limpiar filtros</button>
      </div>
    </div>
  );
}
