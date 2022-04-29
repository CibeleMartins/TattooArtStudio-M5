import styles from './Container.module.css'

function Container(props, className) {

  return (

    <div className={`${styles.container} ${className}`}>

      {props.children}

    </div>

  )
}


export default Container;