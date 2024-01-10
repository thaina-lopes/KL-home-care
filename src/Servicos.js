import "./Servicos.css";
import time from "./img/img_especialiaddes.jpg";
import logokl from "./img/img_especialiades2.webp";

export default function Servicos() {
  return (
    <section className="especialiades" id="servicos">
      <div className="especialiades-imagens">
        <img
          src={time}
          alt="Profissionais da saúde dando as mãos"
          className="img-profissionais"
        />
        <img src={logokl} alt="Logo da KL-Home Care" className="img-logo" />
      </div>
      <div className="especialiades-descricao">
        <a
          className="botao_contato"
          href="https://api.whatsapp.com/send?phone=5551997171340"
          target="_blank"
        >
          Contate-nos
        </a>
        <ul className="especialidades-lista">
          <li className="li-servicos">Enfermeira</li>
          <li className="tec-enfermagem">Técnica em Enfermagem</li>
          <li className="tec-enfermagem-mobile">Téc. Enfermagem</li>
          <li className="li-servicos">Psicóloga</li>
          <li className="li-servicos">Fonoaudióloga</li>
          <li className="li-servicos">Nutricionista</li>
          <li className="li-servicos">Fisioterapeuta</li>
          <li className="li-servicos">Cuidadora</li>
          <li className="li-servicos">Cabelereira</li>
          <li className="li-servicos">Serviços Gerais</li>
        </ul>
      </div>
    </section>
  );
}
