import styles from './ButtonHP.module.css'

function ButtonH ({ onClick, text }) {

  return (

      <button onClick={onClick} className={styles.button_hp}>
        {text}
      </button>
  
  )

}

export default ButtonH;