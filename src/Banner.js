import "./Banner.css";
import logo from "./img/logo.webp";

export default function Banner() {
  return (
    <section className="container_banner">
      <div className="banner">
        <img
          src={logo}
          alt="segurando as mãos de uma pessoa idosa"
          className="logo-banner"
        />
      </div>
    </section>
  );
}
