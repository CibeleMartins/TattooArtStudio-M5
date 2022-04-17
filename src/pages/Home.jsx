import React from 'react';
import styles from './Home.module.css';
import Button from '../components/Button/Button'
import styles_b from '../components/Button/Button.module.css'
// import Rellax from 'rellax';

// const rellax = 
//   new Rellax('.rellax', {
//     speed: -7,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   })

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
          <p className={styles.type_animation}>Crie sua conta e receba pré-atendimentos de sessões de tatuagem e solicitações de orçamento de todo o Brasil</p>
       
        </div>

        <div className={styles.flag_artist}></div>
        
        <div className={styles.text}>

          <p className={styles.big_p}>Artistas que tatuam em todos os estilos</p>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <Button text="Conheça nossos artistas" className={styles_b.button_hp}/>
          </div>

        </div>

        <div className={styles.flag_budget}></div>
        
        <div className={styles.text}>

          <p className={styles.big_p}>Conheça um pouco da nossa arte</p>

          <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
            <Button text="Faça um orçamento" className={styles_b.button_hp}/>
          </div>
          
        </div>



    </main>
  )

}

export default Home;