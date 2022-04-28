import styles from "./Tatuadores.module.css"

function Tatuadores() {
    return(

        <main>  
            
        <div className={styles.tituloIn}>
               <h1>Nossos artistas</h1>
        </div>
        
    <div className={styles.cards}>
        <div className={styles.container}>
            <div className={styles.imagem}> 
                <img src="https://pbs.twimg.com/profile_images/669117153531023360/cSn3fUps_400x400.jpg" alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Paulo André</h3>
               <div className={styles.body }>
               <p>26 anos - São paulo - 4 anos de profissão</p>
               </div>
            </div>

        <div className={styles.bnt}>
            <button>
                <a href="./Contato.jsx">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>

        <div className={styles.container}>
            <div className={styles.imagem}> 
                <img src="https://s2.glbimg.com/WsZV2FK-x9zri5s8bZK6zZSYnzw=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/12/09/didi_tatto4493.jpg" alt="tatuadora"></img>
            <div className={styles.titulo}>
               <h3>Felipe Oliveira</h3>
               <div className={styles.body }>
               <p>29 anos - Rio de Janeiro - 7 anos de profissão</p>
               </div>
            </div>
        <div className={styles.bnt}>
            <button>
                <a href="./Contato.jsx">
                    Contato
                </a>
            </button>
        </div>
        </div>
        </div>

        <div className={styles.container}>
            <div className={styles.imagem}> 
                <img src="https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1561908433/avatars/001/318/042/1318042-original.jpg?1561908433" alt="tatuador"></img>
            <div className={styles.titulo}>
               <h3>Kiko Pontes</h3>
               <div className={styles.body }>
               <p>34 anos - são paulo - 15 anos de profissão</p>
               </div>

            <div>
                <img src="" alt=''></img>

            </div>
        <div className={styles.bnt}>
            <button>
                <a href="./Contato.jsx">
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
        </main>

        
    )
}

export default Tatuadores