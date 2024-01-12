import "./Contato.css";
import imgContato from "./img/img-contato2.jpg";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <img
        src={imgContato}
        alt="Enfermeira e idosa caminhando abraçadas"
        className="img-contato"
      />
      <h2 className="contato-titulo">Contato</h2>
      <div className="contatos">
        <div className="contato-info">
          <p className="contato-texto">Contato para compra de EPI</p>
          <a
            className="contato-telefone"
            href="https://api.whatsapp.com/send?phone=5551997171340"
            target="_blank"
          >
            {" "}
            (51) 9 9717-1340
          </a>
          <p className="contato-texto">Contato para plantões e agendamentos</p>
          <a
            className="contato-telefone"
            href="https://api.whatsapp.com/send?phone=5551999376875"
            target="_blank"
          >
            {" "}
            (51) 9 9937-6875
          </a>
        </div>
        <div className="contato-info">
          <div className="contato-insta">
            <a
              href="mailto:KS.ENFERMAGEM.HOMECARE@GMAIL.COM"
              target="_blank"
              className="mive"
            >
              <MdOutlineEmail size={30} className="icone" />
            </a>
            <a
              className="contato-email"
              href="mailto:KS.ENFERMAGEM.HOMECARE@GMAIL.COM"
              target="_blank"
            >
              KS.ENFERMAGEM.HOMECARE@GMAIL.COM
            </a>
          </div>

          <div className="contato-insta">
            <a
              href="https://www.instagram.com/homecarekl/"
              target="_blank"
              className="mive"
            >
              <FaInstagram size={30} className="icone" />
            </a>
            <a
              className="contato-instagram"
              href="https://www.instagram.com/homecarekl/"
              target="_blank"
            >
              @homecarekl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
