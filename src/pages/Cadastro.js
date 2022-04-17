import React from "react";

import styles from "./Cadastro.module.css"
import { FaUserTie } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import banner from "../assets/imagens/banner.jpeg"


function Cadastro() {
    return(
        <section className={styles.section}>
            <div className={styles.divUsers}>
                <div>
                    <FaUser className={styles.icone}/>
                    <div className={styles.divTexto}>
                        <p>Para clientes</p>
                    </div>
                </div>
                <div>
                    <FaUserTie className={styles.icone}/>
                    <div>
                        <p>Para profissionais</p>
                    </div>
                </div>
            </div>

            <div className={styles.imageAndForm}>
                <img src={banner}/>
            </div>
        </section>
    )
}

export default Cadastro