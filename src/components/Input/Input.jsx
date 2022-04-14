function Input({type, name, onChange, placeholder}) {
    return ( 
        <>
        <input style={{width: 200, heigh: 200, margin: "5px"}}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
        </>

      );
}

export default Input;