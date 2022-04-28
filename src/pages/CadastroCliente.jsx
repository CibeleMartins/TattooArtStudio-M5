import React from 'react';
import { Link } from "react-router-dom"

import styles from "./CadastroCliente.module.css"
import ButtonPages from "../components/Button/ButtonPages"


function CadastroCliente() {
    
    function checaInput() {
        let nome = document.getElementById("nome")
        let senha = document.getElementById("senha")
        let email = document.getElementById("email")
        let tel = document.getElementById("tel")

        if(nome.value !== "" && senha.value !== "" && email.value !== "" && tel.value !== "") {
            alert("Cliente cadastrado com sucesso!")
        }
    }

    return(
        <div className={styles.background}>
          

            <div className={styles.divCadastro}>
                <h2>Preencha o formulário abaixo e aproveite <span>benefícios exclusivos</span></h2>
                <form className={styles.displayForm}>
                    <div>
                        <label htmlFor="nome">Cadastre seu nome:</label><br/>
                        <input type="text" placeholder="Digite seu nome aqui..." id="nome" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="senha">Cadastre sua senha:</label><br/>
                        <input type="text" placeholder="Digite sua senha aqui..." id="senha" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="email">Cadastre seu email:</label><br/>
                        <input type="mail" placeholder="Digite seu email aqui..." id="email" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="tel">Cadastre seu número (WhatsApp):</label><br/>
                        <input type="tel" placeholder="Digite seu email aqui..." id="tel" required/><br/>
                    </div>

                    <div className={styles.divBotao}>
                        <div>
                            <ButtonPages text="Cadastrar cliente" onClick={checaInput}/>
                        </div>
                    </div>
                </form>
            </div>

            <Link to="/Cadastro">
                <div className={styles.botaoRetorno}>
                    <ButtonPages text="Retornar"/>
                </div>
            </Link>

           
        </div>
    )
}

export default CadastroCliente