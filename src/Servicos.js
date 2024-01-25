import "./Servicos.css";

export default function Servicos() {
  return (
    <section className="especialiades" id="servicos">
      <div className="especialidades-texto">
        <p className="paragrafo-texto">
          Queremos lhe fazer um convite, agende uma visita de avaliação e
          conheça nosso trabalho e todo apoio que nossa equipe pode proporcionar
          a você e seu familiar.
        </p>
        <p className="paragrafo-texto">
          Nessa conversa iremos te apresentar os conhecimentos indispensáveis
          para um cuidado realizado por profissionais capacitados em cuidado
          domiciliar.
        </p>
        <p className="paragrafo-texto">
          O atendimento domiciliar garante as famílias qualidade de vida.
        </p>
        <a
          className="botao_contato"
          href="https://api.whatsapp.com/send?phone=5551999376875"
          target="_blank"
        >
          Contate-nos
        </a>
      </div>
      <div className="especialiades-descricao">
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
