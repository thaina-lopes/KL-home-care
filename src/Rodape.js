import "./Rodape.css";

export default function Rodape() {
  return (
    <footer className="rodape">
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
