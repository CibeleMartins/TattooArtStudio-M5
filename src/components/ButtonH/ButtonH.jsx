import styles from './ButtonH.module.css'

function ButtonH ({ onClick, text }) {

  return (

      <button onClick={onClick} className={styles.button_h}>
        {text}
      </button>
  
  )



}


export default ButtonH;