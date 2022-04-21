import styles from "./Atendimentos.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Atendimentos() {
    return(
        <>
            <Header/>

            <div className={styles.container}>
                <h1>Atendimentos</h1>
            </div>

            <Footer/>
        </>
    )
}

export default Atendimentos