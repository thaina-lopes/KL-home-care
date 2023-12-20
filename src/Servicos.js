import "./Servicos.css";
import time from "./img/img_especialiades.png";
import logokl from "./img/img_especialiades2.png";

export default function Servicos() {
  return (
    <section className="especialiades">
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
          <li>Enfermeira</li>
          <li>Técnica em Enfermagem</li>
          <li>Psicóloga</li>
          <li>Fonoaudióloga</li>
          <li>Nutricionista</li>
          <li>Fisioterapeuta</li>
          <li>Cuidadora</li>
          <li>Cabelereira</li>
          <li>Serviços Gerais</li>
        </ul>
      </div>
    </section>
  );
}
