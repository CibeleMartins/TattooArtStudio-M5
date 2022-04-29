import Button from '../components/Button/Button'
import styles_b from '../components/Button/Button.module.css'

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

                <div className={styles.divInfos}>
                    <h4>Carlos Eduardo</h4>
                    <br></br>
                    <p>25 anos</p>
                    <br></br>
                    <p>PONTILHISMO · OLD SCHOOL · GEOMÉTRICO</p>
                    <br></br>
                    <p><strong>Atende em São Paulo e Rio de Janeiro</strong></p>
                </div>

                <img className={styles.imgArtists} src={artist}  alt='artist'/>
                
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>
            
            </div>


            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist1} alt='artist'/>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>
            

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>
            </div>

        </div>

        {/* second division */}

        <div className={styles.secondDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist4} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist3} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

        </div>

        {/* third division */}

        <div className={styles.thirdDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>
            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>
            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'></img>
                <div className={styles.buttonBox}>
                <Button className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

        </div>
        
    </div>

        
    )
}

export default Tatuadores