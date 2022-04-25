import styles from "./Contato.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ButtonPages from "../components/Button/ButtonPages"

function Contato() {
    return(
        <> 
            <Header/>

            
            
            <div className={styles.divCadastro}>
                <h2> Envie suas duvida ou sugestões</h2>
                <form className={styles.displayForm}>

                    <div>
                        <label htmlFor="email">Informe seu email:</label><br/>
                        <input type="mail" placeholder="Digite seu email aqui..." id="email" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="tel">Informe seu número (WhatsApp):</label><br/>
                        <input type="tel" placeholder="Digite seu email aqui..." id="tel" required/><br/>
                    </div>

                    <div>
                        <label htmlFor="email">Envie sua mensagem:</label><br/>
                         <textarea></textarea>
                    </div>

                    <div>
                     <ButtonPages text="Enviar mensagem"/>
                    </div>

                                    
                </form>
            </div>


            <Footer/>
        </>
    )
}

export default Contato