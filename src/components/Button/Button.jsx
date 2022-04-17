import styles from "./button.module.css";
import React from "react";

const Button = ({ onClick, text, props}) => {

  return (

    <button onClick={onClick} 
      className={`${styles.button} ${styles.button_h}`} >

      {text}

    </button>
  );

};


export default Button;