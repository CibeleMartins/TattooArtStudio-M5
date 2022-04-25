import styles from "./Contato.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Contato() {
    return(
        <> 
            <Header/>

            <div className={styles.container}>
                <h1>gilson</h1>
            </div>

            <Footer/>
        </>
    )
}

export default Contato