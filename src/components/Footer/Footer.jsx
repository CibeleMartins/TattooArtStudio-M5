import React from "react";
import styles from "./footer.module.css";

import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';


const Footer = () => {
    
  return (
    <div>
           <footer className={styles.footer}>

           <section style={{display: "flex", flexDirection: "column", marginLeft: "200px", marginTop: "15px"}}>
            <p> Entre em contato, </p>
            <p> Adoraríamos ouvir você! </p>
            </section>

        
           
           <div style={{display: "flex", flexDirection: "column", marginLeft: "200px"}}>
            
            <section style={{display: "flex", margin:"5px 20px 5px 10px"}}>
        
           <FaFacebookF style={{margin:"5px"}}/> 
           <FaWhatsapp  style={{margin:"5px"}}/>
           <FaInstagram style={{margin:"5px"}}/>
           </section>

           <p> Art Studio 2022 </p>
           </div> 
           

           <section style={{display: "flex", flexDirection: "column", marginLeft: "200px", marginBottom: "20px"}}>
            <p> Tattoo Art Studio </p>
            <p> Com sede em São Paulo </p>
            <p> artTstudio@gmail.com </p>
            </section>
            
           

         

          </footer>
    </div>
    
  );
};

export default Footer;