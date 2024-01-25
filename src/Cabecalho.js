import "./Cabecalho.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <nav>
          <a className="menu" href="#sobrenos">
            Sobre nós
          </a>
          <a className="menu" href="#servicos">
            Serviços
          </a>
          <a className="menu" href="#produtos">
            Produtos
          </a>
          <a className="menu" href="#contato">
            Contato
          </a>
          <a
            className="whats"
            href="https://api.whatsapp.com/send?phone=5551999376875"
            target="_blank"
          >
            <FaWhatsapp size={35} />
            <span class="balao">Whatsapp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
