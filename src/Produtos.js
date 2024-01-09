import "./Produtos.css";
import epi from "./img/img-epi2.png";
import logo from "./img/logo.png";

export default function Produtos() {
  return (
    <section className="produtos" id="produtos">
      <div className="produtos-container">
        <div className="produtos-texto">
          <h2 className="produtos-titulo">Comodidade e</h2>
          <h2 className="produtos-titulo">Conforto</h2>
          <p className="produtos-subtitulo">Trabalhamos com uma linha de EPI</p>
          <ul className="produtos-lista">
            <li>Álcool</li>
            <li>Luvas</li>
            <li>Toucas</li>
            <li>Propé</li>
            <li>Agulhas</li>
            <li>Seringas</li>
            <li className="gaze">Gaze estéreo e não estéreo</li>
            <li className="gaze">Papel grau cirúrgico</li>
            <li className="gaze">Fita para autoclave</li>
          </ul>
          <a
            className="botao_comprar"
            href="https://api.whatsapp.com/send?phone=5551997171340"
            target="_blank"
          >
            Comprar
          </a>
        </div>
        <div className="produtos-imagens">
          <img src={epi} alt="Produtos de EPI hospitalar" className="img-epi" />
          <img src={logo} alt="Logo da KL Home Care" className="img-logokl" />
        </div>
      </div>
    </section>
  );
}
