import React from 'react';
import styles from './Home.module.css';
import ButtonH from '../components/ButtonH/ButtonH'
import ButtonHP from '../components/ButtonHP/ButtonHP'

const Home = ({text}) => {

return (

    <main>

        <div className={styles.flag}>

          <div className={styles.elements_flag}>
            <p>Crie uma conta</p>
          </div>

          <div className={styles.elements_flag}>
            <ButtonH text="Aqui"/>
          </div>

        </div>

        <div className={styles.text}>

          <h1>Conectando pessoas pela arte</h1>
          <p>Crie sua conta e receba pré-atendimentos de sessões de tatuagem e solicitações de orçamento  de todo o Brasil</p>
          
        </div>

        <div className={styles.flag_artist}></div>
        
        <div className={styles.text}>

          <p className={styles.big_p}>Artistas que tatuam em todos os estilos</p>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <ButtonHP text="Conheça nossos artistas"/>
          </div>

        </div>

        <div className={styles.flag_budget}></div>
        
        <div className={styles.text}>

          <p className={styles.big_p}>Conheça um pouco da nossa arte</p>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <ButtonHP text="Faça um orçamento"/>
          </div>
          
        </div>

    </main>
  )

}

export default Home;