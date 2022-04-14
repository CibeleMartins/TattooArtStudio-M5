import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/imagens/logo.png";



const Header = () => {

  return (
      <div>

    <header className={styles.header}>

        <img src={logo} className={styles.img}/>

        <div className={styles.frases}>
       <h1 className={styles.titulo}>zutterman </h1>
         <p className={styles.subtitulo}>Measure Tapes</p> 
         </div>


      <nav className={styles.nav}>
        <a className={styles.link} href="#">
          Home
        </a>
        <a className={styles.link} href="#">
          Contato
        </a>
        <a className={styles.link} href="#">
          Tatuadores
        </a>
        <a className={styles.link} href="#">
          Atendimentos
        </a>
        <a className={styles.link} href="#">
          Artes
        </a>
      </nav>
    </header>
    </div>

  );
};

export default Header;
