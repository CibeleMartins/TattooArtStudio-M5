import React from 'react';
import { Link } from "react-router-dom"

import styles from "./Login.module.css"
import ButtonPages from "../components/Button/ButtonPages"

function Login() {

    function checaInput() {
        let nome = document.getElementById("nome")
        let senha = document.getElementById("senha")
    
        if(nome.value !== "" && senha.value !== "") {
            alert("Bem-vindo(a) de volta")
        }
    }

    return(

        <div className={styles.background}>
           
            <div className={styles.divLogin}>
                <h2>Faça seu Login e obtenha <span>o melhor</span> da nossa plataforma</h2>
                <form className={styles.displayForm}>
                    <div>
                        <label htmlFor="nome">Informe seu nome:</label><br/>
                        <input type="text" placeholder="Digite seu nome aqui..." id="nome" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="senha">Informe sua senha:</label><br/>
                        <input type="password" placeholder="Digite sua senha aqui..." id="senha" required/><br/>
                    </div>

                    <div className={styles.divBotao}>
                        <div>
                            <ButtonPages text="Entrar" onClick={checaInput}/>
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

export default Login