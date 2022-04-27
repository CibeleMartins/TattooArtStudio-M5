import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Home.module.css';
import Button from '../components/Button/Button';
import styles_b from '../components/Button/Button.module.css';
import logo from '../assets/imagens/loginIcon.png';

const Home = ({text}) => {

  const navigation = useHistory()

return (

    <main>

      <div className={styles.flag}>

        <div className={styles.login}>

          <div>
            <img onClick={()=> navigation.push('/Login')} alt='/logo' src={logo}></img>
          </div>

          <div className={styles.text_button}>
            <div className={styles.elements}>
              <p className={styles.writes_animation}>Crie uma conta</p>
            </div>

              <div className={styles.elements}>
                <Button onClick={()=> navigation.push('/Cadastro')} text="Aqui" className={styles_b.button_h}/>
              </div>
              
          </div>

            <div className={styles.elements}>
              <Button onClick={()=> navigation.push('/Cadastro')} text="Aqui" className={styles_b.button_h}/>
            </div>

        </div>

      </div>

      <div className={styles.text_two}>
        
          <h1>Conectando pessoas pela arte</h1>
          <p>Crie sua conta e realize pré-atendimentos de sessões de tatuagem e solicitações de orçamento de todo o Brasil</p>
      
      </div>

      <div className={styles.flag_artist}></div>
        
      <div className={styles.text_two}>

          <h3 className={styles.animate}>Artistas que tatuam em todos os estilos</h3>

        <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
        <Button onClick={()=> navigation.push('/Tatuadores')} text="Conheça nossos artistas" 
          className={styles_b.button_quite}/>
        </div>

      </div>

      <div className={styles.flag_budget}></div>
        
      <div className={styles.text_two}>

        <h3>Conheça um pouco da nossa arte</h3>

        <div style={{display: "flex", flexDirection: "column", alignItems:"flex-end"}}>
          <Button onClick={()=> navigation.push('/Atendimentos')} text="Faça um orçamento" className={styles_b.button_end}/>
        </div>
          
      </div>
      

    </main>
    
  
  )

}


export default Home;