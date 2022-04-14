import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/imagens/logo.png";



const Header = () => {

  return (
      
    <header className={styles.header}>

        <img src={logo} className={styles.img}/>


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
   
  );
};

export default Header;
