import "./SobreNos.css";
import sobrenos from "./img/img_sobrenos.png";

export default function SobreNos() {
  return (
    <section className="sobreNos" id="sobrenos">
      <h2 className="titulo_SobreNos">Sobre Nós</h2>
      <div className="container_sobreNos">
        <div className="container_paragrafos">
          <p className="paragrafo_sobreNos">
            Atendimento especializado <strong>domiciliar</strong> e{" "}
            <strong>hospitalar</strong> para pacientes e suas famílias com
            doenças em todos os estágios. Desde o nascimento até o envelhecer,{" "}
            <strong>24 horas</strong> por dia.
          </p>
          <p className="paragrafo_sobreNos">
            Contamos com uma equipe multidisciplinar, assim oferecendo
            acompanhamento completo aos nossos pacientes.{" "}
          </p>
          <p className="paragrafo_sobreNos">
            Realizamos atendimento humanizado, entregando o melhor a cada
            paciente, pois acreditamos que somos únicos e cada paciente e
            família merece o nosso melhor.
          </p>
          <p className="paragrafo_sobreNos">
            <b>KL Home Care</b> - Cuidado com responsabilidade e afeto.
          </p>
        </div>
        <img src={sobrenos} alt="mão segurando um coração" className="img" />
      </div>
    </section>
  );
}
