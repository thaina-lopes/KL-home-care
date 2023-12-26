import "./Rodape.css";
import { FaInstagram } from "react-icons/fa";

export default function Rodape() {
  return (
    <footer className="rodape">
      <a
        href="https://www.instagram.com/homecarekl/"
        target="_blank"
        className="mive"
      >
        <FaInstagram size={32} className="icone" />
      </a>
      <p className="assinatura">
        &copy; Desenvolvido por
        <a
          href="https://agencia-mive.vercel.app/"
          target="_blank"
          className="mive"
        >
          Mivê - Digital Marketing
        </a>
      </p>
    </footer>
  );
}
