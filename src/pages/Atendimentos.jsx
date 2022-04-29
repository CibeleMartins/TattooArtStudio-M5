import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import api from "../services/api";
import styles from "./Atendimentos.module.css";
import ButtonPages from "../components/Button/ButtonPages";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreatEditForm = () => {
  const [Atendimento, setAtendimento] = useState([]);
  const { register, setValue, handleSubmit } = useForm();
  const [editable, setEditable] = useState(false);
  const history = useHistory()

  const { atendimentoId } = useParams();

  const isedit = () => {
    console.log(atendimentoId);
    if (atendimentoId === undefined) {
      setEditable(false);
    } else {
      setEditable(true);
      getAtendimento(atendimentoId);
    }
  };
  const agendar = (data) => {
    api.post(`/Atendimentos`, data).then((response) => {
      alert("Agendamento criado com sucesso!");
      history.push('/AcompanharAtendimentos')
    });
    console.log(data);
  };

  const editar = (data) => {
    api.put(`/atendimentos/${atendimentoId}`, data).then(() => {
      alert("Agendamento editado com sucesso!");
    });
  };

  const getAtendimento = (id) => {
    api.get(`/atendimentosPorId/${id}`).then((response) => {
      setAtendimento(response.data);
      console.log("atendimento", response.data);
      const { data } = response;
      setValue("nome", data.nome);
      setValue("email", data.email);
      setValue("telefone", data.telefone);
      setValue("cidade", data.cidade);
      setValue("estado", data.estado);
      setValue("data", data.data);
      setValue("horário", data.horário);
    });
  };

  useEffect(() => {

    if(atendimentoId !== undefined) {
      isedit();
    }

  }, [atendimentoId]);

  return (
    <div className={styles.fundo}>
      <form
        onSubmit={handleSubmit(editable ? editar : agendar)}
        className={styles.form}
      >
        <h2>
          Preencha os campos abaixo e <span>agende</span> ou <span>altere</span>{" "}
          um atendimento
        </h2>

        <div className={styles.divDisplay}>
          <div className={styles.divComponentes}>
            <label>Informe seu nome:</label>
            <input
              type="text"
              {...register("nome")}
              placeholder="Insira seu nome"
              required
            />
          </div>

          <div className={styles.divComponentes}>
            <label>Informe seu email:</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Insira seu email"
              required
            />
          </div>
        </div>

        <div className={styles.divDisplay}>
          <div className={styles.divComponentes}>
            <label>Informe seu telefone:</label>
            <input
              type="text"
              {...register("telefone")}
              placeholder="Insira seu Telefone"
              required
            />
          </div>
        </div>

        <div className={styles.divDisplay}>
          <div className={styles.divComponentes}>
            <label>Informe sua cidade:</label>
            <input
              type="text"
              {...register("cidade")}
              placeholder="Insira sua Cidade"
              required
            />
          </div>

          <div className={styles.divComponentes}>
            <label>Informe seu Estado:</label>
            <input
              type="text"
              {...register("estado")}
              placeholder="Insira seu Estado"
              required
            />
          </div>
        </div>

        <div className={styles.divDisplay}>
          <div className={styles.divComponentes}>
            <label>Informe o dia escolhido:</label>
            <input
              type="text"
              {...register("data")}
              placeholder="Insira a data que você gostaria"
              required
            />
          </div>

          <div className={styles.divComponentes}>
            <label>Informe o horário desejado:</label>
            <input
              type="text"
              {...register("horário")}
              placeholder="Insira o horário que você gostaria"
              required
            />
          </div>
        </div>

        <button type="submit" className={styles.botaoAgendar}>
          {editable ? "Editar" : "Agendar"}
        </button>
      </form>

      <Link to="/AcompanharAtendimentos">
        <ButtonPages
          className={styles.botaoAcompanhar}
          text="Acompanhar atendimento"
        />
      </Link>
    </div>
  );
};

export default CreatEditForm;