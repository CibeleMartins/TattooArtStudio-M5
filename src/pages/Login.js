import React from 'react';
import { Link } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import styles from "./Login.module.css"
import ButtonPages from "../components/Button/ButtonPages"

function Login() {
    return(
        <div className={styles.background}>
            <Header/>
            <div className={styles.divLogin}>
                <h2>Faça seu Login e obtenha <span>o melhor</span> da nossa plataforma</h2>
                <form className={styles.displayForm}>
                    <div>
                        <label htmlFor="nome">Informe seu nome:</label><br/>
                        <input type="text" placeholder="Digite seu nome aqui..." id="nome"/><br/>
                    </div>

                    <div>
                        <label htmlFor="senha">Informe sua senha:</label><br/>
                        <input type="password" placeholder="Digite sua senha aqui..." id="senha"/><br/>
                    </div>

                    <div className={styles.divBotao}>
                        <div>
                            <ButtonPages text="Entrar"/>
                        </div>
                    </div>
                </form>
            </div>

            <Link to="/Cadastro">
                <div className={styles.botaoRetorno}>
                    <ButtonPages text="Retornar"/>
                </div>
            </Link>

            <Footer/>
        </div>
    )
}

export default Login