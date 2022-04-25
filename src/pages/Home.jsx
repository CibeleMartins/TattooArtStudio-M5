import { Link } from "react-router-dom"
import React from 'react';

import styles from './Home.module.css';
import Button from '../components/Button/Button';
import styles_b from '../components/Button/button.module.css';
import logo from '../assets/imagens/loginIcon.png';

const Home = ({text}) => {

return (

    <main>

        <div className={styles.flag}>

          <div>
            <img src={logo}></img>
          </div>

          <div className={styles.elements}>
            <p className={styles.blink}>Crie uma conta</p>
          </div>

          <div className={styles.elements}>
            <Link to="/Cadastro">
              <Button text="Aqui" className={styles_b.button_h}/>
            </Link>
          </div>

        </div>

       
        <div className={styles.text_two}>
        
          <h1>Conectando pessoas pela arte</h1>
          <p className={styles.writes_animation}>Crie sua conta e receba pré-atendimentos de sessões de tatuagem e solicitações de orçamento de todo o Brasil</p>
       
        </div>

        <div className={styles.flag_artist}></div>
        
        <div className={styles.text_two}>

          <h3 className={styles.animate}>Artistas que tatuam em todos os estilos</h3>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <Button text="Conheça nossos artistas" className={styles_b.button_quite}/>
          </div>

        </div>

        <div className={styles.flag_budget}></div>
        
        <div className={styles.text_two}>

          <h3>Conheça um pouco da nossa arte</h3>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
            <Link to="/Atendimentos">
              <Button text="Solicite um atendimento" className={styles_b.button_end}/>
            </Link>
          </div>
          
        </div>

    </main>
    
  
  )
   
}


export default Home;