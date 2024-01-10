import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cabecalho from "./Cabecalho";
import Banner from "./Banner";
import SobreNos from "./SobreNos";
import Servicos from "./Servicos";
import Produtos from "./Produtos";
import Relatos from "./Relatos";
import Rodape from "./Rodape";
import Contato from "./Contato";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <SobreNos />
    <Servicos />
    <Produtos />
    <Relatos />
    <Contato />
    <Rodape />
  </React.StrictMode>
);
