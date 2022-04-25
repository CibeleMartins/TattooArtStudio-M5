import styles from "./Tatuadores.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Tatuadores() {
    return(
        <>  
            <Header/>

            <div className={styles.container}>
                <h1>Tatuadores</h1>
            </div>

            <Footer/>
        </>
    )
}

export default Tatuadores