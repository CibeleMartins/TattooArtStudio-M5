import { Link } from "react-router-dom"
import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/imagens/logo.png";


const Header = () => {
  return (
    <header className={styles.header}>
    
      <img src={logo} alt={logo} className={styles.img}/>
     

      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        
          
        <Link to="/Contato" className={styles.link}>Contato</Link>
      
      
        <Link to="/Tatuadores" className={styles.link}>Tatuadores</Link>
      
      
        <Link to="/Atendimentos" className={styles.link}>Atendimentos</Link>
      </nav>
    </header>
  );
};

export default Header;
