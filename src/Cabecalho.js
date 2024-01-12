import "./Cabecalho.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <nav>
          <a href="#sobrenos">Sobre nós</a>
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
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
