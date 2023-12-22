import "./Relatos.css";
import relato01 from "./img/relato-01.png";
import relato02 from "./img/relato-02.png";

export default function Relatos() {
  return (
    <section className="relatos">
      <h2 className="relatos-titulo">Relatos de Clientes</h2>
      <div className="relatos-container">
        <img src={relato01} alt="Relato de cliente" className="relato-01" />
        <img src={relato02} alt="Relato de cliente" className="relato-02" />
      </div>
    </section>
  );
}
