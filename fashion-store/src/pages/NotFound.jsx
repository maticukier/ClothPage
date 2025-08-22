import { Link } from "react-router-dom";

export default function NotFound(){
  return (
    <section className="section">
      <div className="container" style={{textAlign:"center", padding:"60px 0"}}>
        <h1 className="hero__title" style={{fontSize:46}}>404</h1>
        <p className="section__subtitle">No encontramos esa página.</p>
        <div className="mt-6">
          <Link to="/" className="btn btn--primary">Volver al inicio</Link>
        </div>
      </div>
    </section>
  );
}
