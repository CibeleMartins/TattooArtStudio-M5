import styles from "./Tatuadores.module.css"
import artist from "../assets/imagens/artist.png"
import artist2 from "../assets/imagens/artist2.png"
import artist3 from "../assets/imagens/artist3.png"
import artist4 from "../assets/imagens/artist4.png"

function Tatuadores() {
    return(

        <main>  
            
        <div className={styles.tituloIn}>
               <h1>Alguns dos nossos Artistas</h1>
        </div>
        
    <div className={styles.cards}>
        <div className={styles.container}>
            <div className={styles.imagem}> 
                <img src={artist} alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Paulo André</h3>
               <div className={styles.body }>
               <p>26 anos - São Paulo - 6 anos de profissão</p>
               </div>
            </div>
        <div className={styles.bnt}>
            <button className={styles.button}>
                <a href="./Contato">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>

        <div className={styles.container}>
            <div> 
                <img src={artist2} alt="tatuadora"></img>
            <div className={styles.titulo}>
               <h3>Vanessa Oliveira</h3>
               <div className={styles.body }>
               <p>29 anos - Rio de Janeiro - 4 anos de profissão</p>
               </div>
            </div>
        <div className={styles.bnt}>
            <button className={styles.button}>
                <a href="./Contato">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>

        <div className={styles.container}>
            <div> 
                <img src={artist4} alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Julio Pontes</h3>
               <div className={styles.body }>
               <p>34 anos - São Paulo - 15 anos de profissão</p>
               </div>

            <div>
            </div>
        <div className={styles.bnt}>
            <button className={styles.button}>
                <a href="./Contato">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>
    </div>

    <div className={styles.container}>
            <div> 
                <img src={artist3} alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Kiko Pontes</h3>
               <div className={styles.body }>
               <p>27 anos - Belo Horizonte - 3 anos de profissão</p>
               </div>

            <div>
            </div>
        <div className={styles.bnt}>
            <button className={styles.button}>
                <a href="./Contato">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>
    </div>

        </div>
        </main>

        
    )
}

export default Tatuadores