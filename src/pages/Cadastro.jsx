import React from 'react';
import {useHistory} from "react-router-dom";
import { FaUser } from 'react-icons/fa';

import styles from "./Cadastro.module.css";
import banner from "../assets/imagens/banner.jpeg";
import loginIcon from "../assets/imagens/loginIcon.png";
import arrowReturn from '../assets/imagens/arrowReturn.png';


function Cadastro() {


    const navigation = useHistory()

    return (

        <section className={styles.section}>

            <div className={styles.divtextClient}>

                <div className={styles.divTexto}>
                    <h1>
                        Cadastre-se aqui!
                    </h1>
                </div>
                
                <div className={styles.divIcons}>
                    <div onClick={()=> navigation.push('/CadastroCliente')} className={styles.divIconsDiv}>
                        <FaUser className={styles.icons}/>
                        <h3>Para clientes</h3>
                    </div>
                </div>
                
                <div className={styles.arrow}>
                    <img onClick={()=> navigation.push('/')} src={arrowReturn} alt='arrowReturn' width={35}/>
                </div>

            </div>

            <div className={styles.imageAndForm}>

                <div className={styles.loginIcon}>
                    
                    <img onClick={()=> navigation.push('/Login')} src={loginIcon} alt="" width={30}/>
                    
                </div>

                <div className={styles.divBanner}>

                <img src={banner} alt="banner"/>
    
                </div>
            </div>

        </section>
    )
}

export default Cadastro