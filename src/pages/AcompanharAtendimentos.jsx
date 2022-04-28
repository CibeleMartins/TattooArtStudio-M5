import { useParams } from "react-router-dom"
import styles from "./AcompanharAtendimentos.module.css"

import ShowScheduling from "./scheduling/ShowScheduling.jsx"


function AcompanharAtendimentos() {
    const { id } = useParams();

    return(
        <div className={styles.fundo}>
            <div className={styles.container}>
                <h2>Checagem de <span>atendimento</span></h2>
                <ShowScheduling userId={id}/>
            </div>
        </div>
    )
}

export default AcompanharAtendimentos