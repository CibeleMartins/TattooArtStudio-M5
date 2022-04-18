import styles from "./Button.module.css";
import React from "react";

const Button = ({ onClick, text, className}) => {

  return (

    <button onClick={onClick} 
      className={`${styles.button} ${className}`} >

      {text}

    </button>
  );

};


export default Button;