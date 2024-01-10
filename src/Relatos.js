import "./Relatos.css";

export default function Relatos() {
  return (
    <section className="relatos">
      <h2 className="relatos-titulo">Relatos de Clientes</h2>
      <ul className="relatos-container">
        <li className="relato-lista">
          <p className="relato-texto">
            “Queria elogiar o belo atendimento da Cris e da Kelly, meus pais
            gostaram muito!”
          </p>
          <p className="relato-nome">Adonias Rosalino</p>
        </li>
        <li className="relato-lista">
          <p className="relato-texto">
            “Oi Karine, quero agradecer teu trabalho e o carinho das gurias. Sem
            vocês teria sido bem mais difícil. Agora vou andar sozinha!
            Obrigada!”
          </p>
          <p className="relato-nome">Vanilda</p>
        </li>
        <li className="relato-lista">
          <p className="relato-texto">
            “Te agradeço por toda atenção que me deram, principalmente na fase
            mais difícil. Tua ajuda foi essencial para superarmos tudo isso.”
          </p>
          <p className="relato-nome">Natália</p>
        </li>
        <li className="relato-lista">
          <p className="relato-texto">
            “Obrigado Karine e equipe, há cerca de um ano atrás estávamos
            passando estes desafio que pareciam intransponíveis com a mãe
            hospitalizada e com a ajuda de vocês foi possível, superar.”
          </p>
          <p className="relato-nome">Thiago</p>
        </li>
      </ul>
    </section>
  );
}
