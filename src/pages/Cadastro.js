import React from 'react';
import { Link } from "react-router-dom"

import styles from "./Cadastro.module.css"
import { FaUserTie } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import banner from "../assets/imagens/banner.jpeg"
import loginIcon from "../assets/imagens/loginIcon.png"
import ButtonHP from "../components/ButtonHP/ButtonHP"

function Cadastro() {
    return(
        <section className={styles.section}>
            <div className={styles.divUsers}>
                <div className={styles.divTexto}>
                    <h1>
                        Cadastre-se<br/>aqui!
                    </h1>
                </div>
                
                <div className={styles.divIcons}>
                    <Link to="/CadastroCliente" className={styles.divIconsDiv}>
                        <FaUser className={styles.icons}/>
                        <h3>Para clientes</h3>
                    </Link>s
                    

                    <Link to="/CadastroTatuador" className={styles.divIconsDiv}>
                        <FaUserTie className={styles.icons}/>
                        <h3>Para tatuadores</h3>
                    </Link>s
                </div>

                <div className={styles.buttonReturn}>
                    <Link to="/">
                        <ButtonHP text={"Home"} className={styles.buttonReturn}/>
                    </Link>
                </div>
            </div>

            <div className={styles.imageAndForm}>
                <div className={styles.loginIcon}>
                    <Link to="/Login">
                        <img src={loginIcon} alt=""/>
                    </Link>
                </div>
                <img src={banner} alt=""/>
            </div>
        </section>
    )
}

export default Cadastro