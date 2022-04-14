import React from "react";
import styles from "./footer.module.css";
import youtube from "./youtube.png";
import twitter from "./twitter.png";
import facebook from "./facebook.png";




const Footer = () => {
    
  return (
    <div>
           <footer className={styles.footer}>

           <section style={{display: "flex", flexDirection: "column", marginLeft: "100px"}}>
            <p className={styles.p}> Entre em contato </p>
            <p className={styles.address}> Adoraríamos ouvir você! </p>
            </section>

        
           
           <div style={{display: "flex", flexDirection: "column"}}>
            
            <section style={{display: "flex", marginLeft: "30px"}}>
           <img src={instagram} className={styles.img}/>
           <img src={facebook} className={styles.img}/>
           <img src={whatsapp} className={styles.img}/>
           </section>
           <p className={styles.p}> Art Studio 2022 </p>
           </div> 
           

           <section style={{display: "flex", flexDirection: "column", marginLeft: "100px"}}>
            <p className={styles.p}> Tattoo Art Studio </p>
            <p className={styles.address}> Com sede em São Paulo </p>
            <p className={styles.address}> artTstudio@gmail.com </p>
            </section>
            
           

         

          </footer>
    </div>
    
  );
};

export default Footer;