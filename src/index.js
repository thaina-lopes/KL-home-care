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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFd-MqqmJ2byHFiWMjz4Sf2TvzGvAMH6U",
  authDomain: "homecare-kl.firebaseapp.com",
  projectId: "homecare-kl",
  storageBucket: "homecare-kl.appspot.com",
  messagingSenderId: "478292290861",
  appId: "1:478292290861:web:90bf1649ee5612d63777a4",
  measurementId: "G-KJ4BDR3JR2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

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
