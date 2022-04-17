import { Link } from "react-router-dom"
import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/imagens/logo.png";


const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <img src={logo} alt={logo} className={styles.img}/>
      </Link>

      <nav className={styles.nav}>
        <a>
          <Link to="/" className={styles.link}>Home</Link>
        </a>
        <a>
          <Link to="/Contato" className={styles.link}>Contato</Link>
        </a>
        <a>
          <Link to="/Tatuadores" className={styles.link}>Tatuadores</Link>
        </a>
        <a>
          <Link to="/Atendimentos" className={styles.link}>Atendimentos</Link>
        </a>
        <a>
          <Link to="/Artes" className={styles.link}>Artes</Link>  
        </a>
      </nav>
    </header>
  );
};

export default Header;
