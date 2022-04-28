import { useParams } from "react-router-dom"
import styles from "./Atendimentos.module.css"
import ShowScheduling from "./scheduling/ShowScheduling.jsx"


function Atendimentos() {
    const { id } = useParams();
    return(
        <>
           

            <div className={styles.container}>
                <h1>Atendimentos</h1>
            </div>
            <ShowScheduling userId={id}/>
           

            
        </>
    )
}

export default Atendimentos