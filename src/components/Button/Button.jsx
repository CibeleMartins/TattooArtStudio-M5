import styles from "./button.module.css";
import React from "react";

const Button = ({ onClick, text, className}) => {

  return (

    <button onClick={onClick} 
      className={`${className}`} customClass={styles.button}>

      {text}

    </button>
  );

};


export default Button;