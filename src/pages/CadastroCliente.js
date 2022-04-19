import React from 'react';
import { Link } from "react-router-dom"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import styles from "./CadastroCliente.module.css"
import ButtonHP from "../components/ButtonHP/ButtonHP"


function CadastroCliente() {
    return(
        <div className={styles.background}>
            <Header/>

            <div className={styles.divCadastro}>
                <h2>Preencha o formulário abaixo e aproveite <span>benefícios exclusivos</span></h2>
                <form className={styles.displayForm}>
                    <div>
                        <label htmlFor="nome">Cadastre seu nome:</label><br/>
                        <input type="text" placeholder="Digite seu nome aqui..." id="nome"/><br/>
                    </div>

                    <div>
                        <label htmlFor="senha">Cadastre sua senha:</label><br/>
                        <input type="text" placeholder="Digite sua senha aqui..." id="senha"/><br/>
                    </div>

                    <div>
                        <label htmlFor="email">Cadastre seu email:</label><br/>
                        <input type="mail" placeholder="Digite seu email aqui..." id="email"/><br/>
                    </div>

                    <div>
                        <label htmlFor="tel">Cadastre seu número (WhatsApp):</label><br/>
                        <input type="tel" placeholder="Digite seu email aqui..." id="tel"/><br/>
                    </div>

                    <div className={styles.divBotao}>
                        <div>
                            <ButtonHP text="Cadastrar cliente"/>
                        </div>
                    </div>
                </form>
            </div>

            <Link to="/Cadastro">
                <div className={styles.botaoRetorno}>
                    <ButtonHP text="Retornar"/>
                </div>
            </Link>

            <Footer/>
        </div>
    )
}

export default CadastroCliente