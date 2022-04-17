import styles from "./Artes.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Artes() {
    return(
        <>
            <Header/>

            <div className={styles.container}>
                <h1>Artes</h1>
            </div>

            <Footer/>
        </>
    )
}

export default Artes