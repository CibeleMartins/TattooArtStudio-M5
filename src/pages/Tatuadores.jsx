import { useHistory } from 'react-router-dom';

import Button from '../components/Button/Button';
import styles_b from '../components/Button/Button.module.css';

import styles from './Tatuadores.module.css';
import artist from "../assets/imagens/artist.png";
import artist1 from "../assets/imagens/artist1.png";
import artist2 from "../assets/imagens/artist2.png";
import artist3 from "../assets/imagens/artist3.png";
import artist4 from "../assets/imagens/artist4.png";
import artist5 from "../assets/imagens/artist5.png";
import artist6 from "../assets/imagens/artist6.png";
import artist7 from "../assets/imagens/artist7.png";
import artist8 from "../assets/imagens/artist8.png";


function Tatuadores() {

    const navigation= useHistory()

    return (

    <div className={styles.container}>  
        
        {/* first division */}
        <div className={styles.firstDivision}>

            <div className={styles.cards}>
                
                
                    <img className={styles.imgArtists} src={artist}  alt='artist'/>
                

                <div className={styles.divInfos}>
                    <h4>Carlos Eduardo</h4>
                    <br></br>
                    <p>25 anos</p>
                    <br></br>
                    <p>PONTILHISMO · OLD SCHOOL · GEOMÉTRICO</p>
                    <br></br>
                    <p><strong>Atende em São Paulo e Rio de Janeiro</strong></p>
                </div>
                
                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>


            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist1} alt='artist'/>

                <div className={styles.divInfos}>
                    <h4>Alex Ferraz</h4>
                    <br></br>
                    <p>32 anos</p>
                    <br></br>
                    <p>MINIMALISTA · GEOMÉTRICO · BLACKWORK</p>
                    <br></br>
                    <p><strong>Atende em São Paulo e Rio de Janeiro</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>
            

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist2} alt='artist'/>

                <div className={styles.divInfos}>
                    <h4>Rafella Martins</h4>
                    <br></br>
                    <p>24 anos</p>
                    <br></br>
                    <p>SINGLE LINE · PONTILHISMO · OLD SCHOOL</p>
                    <br></br>
                    <p><strong>Atende no Rio de Janeiro</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>
            </div>

        </div>

        {/* second division */}

        <div className={styles.secondDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist4} alt='artist'/>

                <div className={styles.divInfos}>
                    <h4>Thiago Vieira</h4>
                    <br></br>
                    <p>38 anos</p>
                    <br></br>
                    <p>GLITCH · GEOMÉTRICO · AQUARELA</p>
                    <br></br>
                    <p><strong>Atende em São Paulo</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist3} alt='artist'></img>

                <div className={styles.divInfos}>
                    <h4>Carina Ribeiro</h4>
                    <br></br>
                    <p>23 anos</p>
                    <br></br>
                    <p>ORIENTAL · MINIMALISTA · OLD SCHOOL</p>
                    <br></br>
                    <p><strong>Atende em São Paulo e Rio de Janeiro</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist5} alt='artist'></img>

                <div className={styles.divInfos}>
                    <h4>Paulo Ferreira</h4>
                    <br></br>
                    <p>25 anos</p>
                    <br></br>
                    <p>REALISTA · GEOMÉTRICO · MAORI</p>
                    <br></br>
                    <p><strong>Atende em São Paulo</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

        </div>

        {/* third division */}

        <div className={styles.thirdDivision}>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist6} alt='artist'/>

                <div className={styles.divInfos}>
                    <h4>Milena Alves</h4>
                    <br></br>
                    <p>25 anos</p>
                    <br></br>
                    <p>GLITCH · SINGLE LINE · REALISTA</p>
                    <br></br>
                    <p><strong>Atende em São Paulo</strong></p>
                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>
            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist7} alt='artist'/>

                <div className={styles.divInfos}>

                    <h4>Beatriz Gomes</h4>
                    <br></br>
                    <p>27 anos</p>
                    <br></br>
                    <p>MINIMALISTA · REALISTA · OLD SCHOOL</p>
                    <br></br>
                    <p><strong>Atende no Rio de Janeiro</strong></p>

                </div>

                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

            <div className={styles.cards}>

                <img className={styles.imgArtists} src={artist8} alt='artist'/>

                <div className={styles.divInfos}>

                    <h4>Eduardo Lopes</h4>
                    <br></br>
                    <p>29 anos</p>
                    <br></br>
                    <p>PONTILHISMO · GLITCH · BLACKWORK</p>
                    <br></br>
                    <p><strong>Atende em São Paulo e Rio de Janeiro</strong></p>

                </div>


                <div className={styles.buttonBox}>
                <Button onClick={()=> navigation.push('/Atendimentos')} className={styles_b.button_h} text='Agendar'/>
                </div>

            </div>

        </div>
        
    </div>

        
    )
}

export default Tatuadores;