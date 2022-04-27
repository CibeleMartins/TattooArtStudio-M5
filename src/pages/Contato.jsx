import styles from "./Contato.module.css"
import ButtonPages from "../components/Button/ButtonPages"

function Contato() {

    function checaInput() {
        let email= document.getElementById("email")
        let texto= document.getElementById("texto")
        let tel= document.getElementById("tel")

        if(email.value !== "" && texto.value !== ""  && tel.value !== "") {
            alert("Mensagem enviada com sucesso!")
        }
    }

    return(
        <> 
            <div className={styles.Fundo}>
               

                <div className={styles.divContato}>
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
                            <label htmlFor="texto">Envie sua mensagem:</label><br/>
                            <textarea id="texto" required></textarea>
                        </div>

                        <div>
                        <ButtonPages text="Enviar mensagem" onClick={checaInput}/>
                        </div>            
                    </form>
                </div>

                
            </div>
        </>
    )
}

export default Contato