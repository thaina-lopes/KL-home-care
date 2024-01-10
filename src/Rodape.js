import "./Rodape.css";

export default function Rodape() {
  return (
    <footer className="rodape">
      <a
        href="https://agencia-mive.vercel.app/"
        target="_blank"
        className="rodape-mive"
      >
        &copy;
        <p className="assinatura"> mivê - Digital Marketing</p>
      </a>
    </footer>
  );
}
