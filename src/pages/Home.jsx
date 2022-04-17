import React from 'react';
import styles from './Home.module.css';
import style_b from '../components/ButtonH/ButtonH.module.css'
import styles_b from '../components/Button/button.module.css'
import Button from '../components/Button/Button'



const Home = ({text}) => {

return (

    <main>

        <div className={styles.flag}>

          <div className={styles.elements_flag}>
            <p>Crie uma conta</p>
          </div>

          <div className={styles.elements_flag}>
            <Button text="Aqui" className={styles_b.button_h}/>
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
          <Button text="Conheça nossos artistas"/>
          </div>

        </div>

        <div className={styles.flag_budget}></div>
        
        <div className={styles.text}>

          <p className={styles.big_p}>Conheça um pouco da nossa arte</p>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <Button text="Faça um orçamento"/>
          </div>
          
        </div>

    </main>
  )

}

export default Home;