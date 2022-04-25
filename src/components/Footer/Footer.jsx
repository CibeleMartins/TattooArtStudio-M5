import React from "react";
import styles from "./footer.module.css";

import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


const Footer = () => {
    
  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <p> Entre em contato, </p>
        <p> Adoraríamos ouvir você! </p>
      </section>

      <section className={styles.sectionRedesSociaisParagrafo}>  
        <div className={styles.sectionRedesSociais}>  
          <FaFacebookF className={styles.icone}/>
          <FaWhatsapp className={styles.icone}/>
          <FaInstagram className={styles.icone}/>
        </div>

        <p>Art Studio <span>2022</span></p>
      </section> 
      
      <section className={styles.sectionInformacoes}>                
        <p> Tattoo Art Studio </p>
        <p> Com sede em São Paulo </p>
        <p> artTstudio@gmail.com </p>
      </section>
    </footer>
  );
};

export default Footer;