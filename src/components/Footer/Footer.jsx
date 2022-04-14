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

        
           
           <div     className={styles.sectionRedesSociaisParagrafo}>  
            
            <section className={styles.sectionRedesSociais}>  
        
           <FaFacebookF style={{margin:"5px"}}/> 
           <FaWhatsapp  style={{margin:"5px"}}/>
           <FaInstagram style={{margin:"5px"}}/>
           </section>

           <p> Art Studio 2022 </p>
           </div> 
           

           <section className={styles.sectionInformacoes}>                
            <p> Tattoo Art Studio </p>
            <p> Com sede em São Paulo </p>
            <p> artTstudio@gmail.com </p>
            </section>
            
           

         

          </footer>
    
    
  );
};

export default Footer;