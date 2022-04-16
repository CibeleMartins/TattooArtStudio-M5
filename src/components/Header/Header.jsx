import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/imagens/logo.png";



const Header = () => {

  return (
      <div>

    <header className={styles.header}>

        <img src={logo} alt={logo} className={styles.img}/>


      <nav className={styles.nav}>
        <a className={styles.link} href="/home">
          Home
        </a>
        <a className={styles.link} href="/teste">
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
