import React from 'react';
import styles from './Loader.module.css'
import tattooMachine from '../../assets/imagens/tattooMachine.png'

function Loader () {

  return (

    <main className={styles.body}>

      <div className={styles.rotatingDiv}>
        <div className={styles.loader}></div>
      </div>

      <div className={styles.machineDiv}>
        <img src={tattooMachine} alt='machine' className={styles.machineImg}/>
      </div>

    </main>

  )

}


export default Loader;