import styles from './Tatuadores.module.css';
import artist from "../assets/imagens/artist.png"
import artist1 from "../assets/imagens/artist1.png"
import artist2 from "../assets/imagens/artist2.png"
import artist3 from "../assets/imagens/artist3.png"
import artist4 from "../assets/imagens/artist4.png"

function Tatuadores() {

    return (

    <div className={styles.container}>  
        
        {/* first division */}
        <div className={styles.firstDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist}  alt='artist'/>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist1} alt='artist'/>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>

            </div>

        </div>

        {/* second division */}

        <div className={styles.secondDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist4} alt='artist'></img>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist3} alt='artist'></img>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>

            </div>

        </div>

        {/* third division */}

        <div className={styles.thirdDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>

            </div>

        </div>
        
    </div>

        
    )
}

export default Tatuadores