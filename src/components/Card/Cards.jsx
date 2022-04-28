import styles from "./cards.module.css";
import Button from "../Button/Button.jsx";

const Card = ({id, nome, email, telefone, cidade, data, horário, deletar, edit }) => {

    return (
        <div className={styles.card} id={id}>
            <p>Nome: <span>{nome}</span></p>
            <p>Email: <span> {email}</span> </p>
            <p>Telefone: <span> {telefone}</span> </p>
            <p>Cidade: <span> {cidade}</span> </p>
            <p>Data: <span> {data}</span> </p>
            <p>Horário: <span> {horário}</span> </p>

            <div className={styles.botoesDiv}>
                <Button onClick={() => deletar(id)} text="Deletar atendimento" className={styles.botoes}></Button>
                <Button onClick={() => edit(id)} text="Editar atendimento" className={styles.botoes}></Button>
            </div>
        </div>
    )
}

export default Card;