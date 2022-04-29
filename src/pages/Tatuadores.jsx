import styles from "./Tatuadores.module.css"
import artist from "../assets/imagens/artist.png"
import artist2 from "../assets/imagens/artist2.png"
import artist3 from "../assets/imagens/artist3.png"

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
               <p>26 anos - São paulo - 4 anos de profissão</p>
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
               <h3>Felipe Oliveira</h3>
               <div className={styles.body }>
               <p>29 anos - Rio de Janeiro - 7 anos de profissão</p>
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
                <img src={artist3} alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Kiko Pontes</h3>
               <div className={styles.body }>
               <p>34 anos - são paulo - 15 anos de profissão</p>
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
               <p>34 anos - são paulo - 15 anos de profissão</p>
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

        <div className={styles.tituloFim}>
               <h1>Quem somos</h1>
               <p>  Fundado em 1997, o Tattoo Art Studio atualmente é considerado um
                    dos mais conhecidos e respeitados estúdios 
                    de tatuagem do Brasil. conquistando nosso espaço ao longo de mais
                    de 20 anos de atuação no segmento de tatuagens. Além dos prêmios
                    conquistados individualmente por cada tatuador que forma 
                    a nossa equipe, também ficamos muito satisfeitos pelo reconhecimento
                    de nossos clientes e felizes com a dedicação que temos em 
                    eternizar em suas peles os sonhos e emoções unicamente incríveis.</p>
        </div>
        </div>
        </main>

        
    )
}

export default Tatuadores