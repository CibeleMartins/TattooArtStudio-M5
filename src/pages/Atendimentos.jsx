import styles from "./Atendimentos.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import ButtonPages from "../components/Button/ButtonPages"

function Atendimentos() {

    function chamaDisplayAcompanhamento() {
        let displayForm = document.getElementById("displayForm");
        let displayAcompanhamento = document.getElementById("displayAcompanhamento");

        displayForm.style.display = "none";
        displayAcompanhamento.style.display = "flex";
    }

    function chamaDisplaySolicitacao() {
        let displayForm = document.getElementById("displayForm");
        let displayAcompanhamento = document.getElementById("displayAcompanhamento");

        displayForm.style.display = "flex";
        displayAcompanhamento.style.display = "none";
    }

    return(
        <>
            <Header/>

            <div className={styles.fundo}>
                <div className={styles.container}>
                    <h2>Preencha os campos abaixo e solicite um atendimento:</h2>

                    <div className={styles.display}>
                        <div className={styles.displayBotoes}>
                            <div>
                                <ButtonPages text="Solicitar atendimento" className={styles.botaoEsquerdo} onClick={chamaDisplaySolicitacao}/>
                            </div>

                            <div>
                                <ButtonPages text="Acompanhar atendimento" className={styles.botaoEsquerdo} onClick={chamaDisplayAcompanhamento}/>
                            </div>
                        </div>

                        <div className={styles.displayForm} id="displayForm">
                            <form className={styles.form}>
                                <div className={styles.formDivs}>
                                    <div>
                                        <label htmlFor="nome">Cadastre seu nome:</label><br/>
                                        <input type="text" placeholder="Digite seu nome aqui..." id="nome"/><br/>
                                    </div>  

                                    <div>
                                        <label htmlFor="email">Cadastre seu email:</label><br/>
                                        <input type="mail" placeholder="Digite o seu email aqui..." id="email"/><br/>
                                    </div>
                                </div>
                                

                                <div className={styles.formDivs}>
                                    <div>
                                        <label htmlFor="tel">Cadastre seu número (WhatsApp):</label><br/>
                                        <input type="tel" placeholder="Digite o seu número aqui..." id="tel"/><br/>
                                    </div>
                                </div>

                                <div className={styles.formDivs}>
                                    <div>
                                        <label htmlFor="estado">Informe seu Estado:</label><br/>
                                        <select name="estado" id="estado"> 
                                            <option>Selecione o Estado</option> 
                                            <option value="ac">Acre</option> 
                                            <option value="al">Alagoas</option> 
                                            <option value="am">Amazonas</option> 
                                            <option value="ap">Amapá</option> 
                                            <option value="ba">Bahia</option> 
                                            <option value="ce">Ceará</option> 
                                            <option value="df">Distrito Federal</option> 
                                            <option value="es">Espírito Santo</option> 
                                            <option value="go">Goiás</option> 
                                            <option value="ma">Maranhão</option> 
                                            <option value="mt">Mato Grosso</option> 
                                            <option value="ms">Mato Grosso do Sul</option> 
                                            <option value="mg">Minas Gerais</option> 
                                            <option value="pa">Pará</option> 
                                            <option value="pb">Paraíba</option> 
                                            <option value="pr">Paraná</option> 
                                            <option value="pe">Pernambuco</option> 
                                            <option value="pi">Piauí</option> 
                                            <option value="rj">Rio de Janeiro</option> 
                                            <option value="rn">Rio Grande do Norte</option> 
                                            <option value="ro">Rondônia</option> 
                                            <option value="rs">Rio Grande do Sul</option> 
                                            <option value="rr">Roraima</option> 
                                            <option value="sc">Santa Catarina</option> 
                                            <option value="se">Sergipe</option> 
                                            <option value="sp">São Paulo</option> 
                                            <option value="to">Tocantins</option> 
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="cidade">Informe sua cidade:</label><br/>
                                        <input type="text" placeholder="Digite o nome da sua cidade aqui..." id="cidade"/><br/>
                                    </div>
                                </div>
                                
                                <div className={styles.formDivs}>
                                    <div>
                                        <label htmlFor="date">Informe a data desejada:</label><br/>
                                        <input type="date" id="date"  min="2022-04-25"/>
                                    </div>

                                    <div>
                                        <label htmlFor="time">Informe o horário desejado:</label><br/>
                                        <input type="time" id="time" min="09:00" max="18:00"/>
                                    </div>
                                </div>

                                <div>
                                    <ButtonPages text="Solicitar atendimento" className={styles.botaoAtendimento}/>
                                </div>
                            </form>
                        </div>

                        <div className={styles.displayAcompanhamento} id="displayAcompanhamento">
                            <div className={styles.visualizacao}>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                                <p>Atendiento1</p><p>Atendiento1</p>
                            </div>

                            <div className={styles.visualizacaoBotao}>
                                <ButtonPages text="Alterar solicitação" className={styles.botaoAtendimento}/>

                                <ButtonPages text="Excluir solicitação" className={styles.botaoAtendimento}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Atendimentos