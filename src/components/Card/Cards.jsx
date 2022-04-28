import styles from "./cards.module.css";
import Button from "../Button/Button.jsx";

const Card = ({id, nome, email, telefone, cidade, data, horário, deletar, edit }) => {



    return (
        <div className={styles.card} id={id}>
        <p>
        Nome: <span>{nome}</span>
        </p>
        <p>email: <span> {email}</span> </p>
        <p>telefone: <span> {telefone}</span> </p>
        <p>cidade: <span> {cidade}</span> </p>
        <p>data: <span> {data}</span> </p>
        <p>horário: <span> {horário}</span> </p>
        <Button onClick={() => deletar(id)} text="deletar atendimento">  </Button>
        <Button onClick={() => edit(id)} text="editar atendimento">  </Button>
        </div>
    )


}

export default Card;