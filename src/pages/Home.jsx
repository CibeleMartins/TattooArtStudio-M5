import React from 'react';
import styles from './Home.module.css';
import ButtonH from '../components/ButtonH/ButtonH'



const Home = ({text}) => {


return (

  <main>

      <div className={styles.flag}>

        <div className={styles.elements_flag}>
          <p>Crie uma conta</p>
        </div>

        <div className={styles.elements_flag}>
          <ButtonH text="Aqui" className={styles.button_h}/>
        </div>

      </div>

      <div className={styles.text}>

        <h1>Conectando pessoas pela arte</h1>
        <p>Crie sua conta e receba pré-atendimentos de sessões de tatuagem e solicitações de orçamento  de todo o Brasil</p>
        
      </div>

      <div className={styles.flag_artist}></div>
      
      <div className={styles.text}>

        <h1>Conectando pessoas pela arte</h1>
        <p>Crie sua conta e receba pré-atendimentos de sessões de tatuagem e solicitações de orçamento  de todo o Brasil</p>
        
      </div>

  </main>
)

}

export default Home;