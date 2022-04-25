import styles from "./Contato.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Contato() {
    return(
        <> 
            <Header/>

            
            
            <div className={styles.divCadastro}>
                <h2>Preencha o formulário abaixo e aproveite <span>benefícios exclusivos</span></h2>
                <form className={styles.displayForm}>

                    <div>
                        <label htmlFor="email">Cadastre seu email:</label><br/>
                        <input type="mail" placeholder="Digite seu email aqui..." id="email" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="tel">Cadastre seu número (WhatsApp):</label><br/>
                        <input type="tel" placeholder="Digite seu email aqui..." id="tel" required/><br/>
                    </div>

                                    
                </form>
            </div>


            <Footer/>
        </>
    )
}

export default Contato