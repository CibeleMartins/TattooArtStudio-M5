import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom"

import api from "../services/api"
import styles from "./Atendimentos.module.css"
import ButtonPages from "../components/Button/ButtonPages"


const CreatEditForm = () => { 
    const [Atendimento, setAtendimento] = useState([]);
    const [Update, setUpdate] = useState(false);
    const {register, handleSubmit} = useForm();

    let editable = false
    const {atendimentoId } = useParams();
    const isedit = () => {
        console.log(atendimentoId)
         if (atendimentoId === undefined ) { 
           editable = false

         } else { editable = true 
            getAtendimento(atendimentoId)}
    }
    const agendar = (data) => {
   
        api.post(`/atendimentos`, data).then(() => {
          setUpdate(true);
          
        });
        console.log(data)
      }

    const editar = (data) => {
        api.put(`/atendimentos/${data.id}`, data).then(() => {
            setUpdate(true);

    });
}

const getAtendimento = (id) => { 
    api.get(`/atendimentosPorId/${id}`).then((response) => {
        setAtendimento(response.data);
        console.log('atendimento',response.data)
      });
    }

    isedit()

    function checaInput() {

      let nome= document.getElementById("nome")
      let email= document.getElementById("email")
      let telefone= document.getElementById("telefone")
      let cidade= document.getElementById("cidade")
      let estado= document.getElementById("estado")
      let data= document.getElementById("data")
      let horario= document.getElementById("horario")

      if(nome.value !== "" && email.value !== ""  && telefone.value !== "" && cidade.value !== "" && estado.value !== "" && data.value !== "" && horario.value !== "") {
          alert("Agendamento realizado com sucesso!")
      }
    }

    return ( 
        <div className={styles.fundo}>
            
          <form onSubmit={handleSubmit(editable? editar : agendar )} className={styles.form}>
            
            <h2>Preencha os campos abaixo e <span>solicite</span> um atendimento</h2>

            <div className={styles.divDisplay}>
              <div className={styles.divComponentes}>
                <label>Informe seu nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={editable? Atendimento.nome : undefined}
                  {...register("nome")}
                  placeholder="Insira seu nome"
                  required
                  id="nome"
                />
              </div>

              <div className={styles.divComponentes}>
                <label>Informe seu email:</label>
                <input
                  type="email"
                  name="email"
                  value={editable? Atendimento.email : undefined}
                  {...register("email")}
                  placeholder="Insira seu email"
                  required
                  id="email"
                />
              </div>
            </div>

            <div className={styles.divDisplay}>
              <div className={styles.divComponentes}>
                <label>Informe seu telefone:</label>
                <input
                  type="text"
                  name="telefone"
                  value={editable? Atendimento.telefone : undefined}
                  {...register("telefone")}
                  placeholder="Insira seu Telefone"
                  required
                  id="telefone"
                />
              </div>
            </div>

            <div className={styles.divDisplay}>
              <div className={styles.divComponentes}>
                <label>Informe sua cidade:</label>
                <input
                  type="text"
                  name="cidade"
                  value={editable? Atendimento.cidade : undefined}
                  {...register("cidade")}
                  placeholder="Insira sua Cidade"
                  required
                  id="cidade"
                />
              </div>
              
              <div className={styles.divComponentes}>
                <label>Informe seu Estado:</label>
                <input
                  type="text"
                  name="estado"
                  value={editable? Atendimento.estado : undefined}
                  {...register("estado")}
                  placeholder="Insira seu Estado"
                  required
                  id="estado"
                />
              </div>
            </div>
            
            <div className={styles.divDisplay}>
              <div className={styles.divComponentes}>
                <label>Informe o dia escolhido:</label>
                <input
                  type="text"
                  name="data"
                  value={editable? Atendimento.data : undefined}
                  {...register("data")}
                  placeholder="Insira a data que você gostaria"
                  required
                  id="data"
                />
              </div>

              <div className={styles.divComponentes}>
                <label>Informe o horário desejado:</label>
                <input
                  type="text"
                  name="horário"
                  value={editable? Atendimento.horário : undefined}
                  {...register("horário")}
                  placeholder="Insira o horário que você gostaria"
                  required
                  id="horario"
                />
              </div>
            </div>
            
            <button type="submit" className={styles.botaoAgendar} onClick={checaInput}>{editable? "Editar" : "Agendar"}</button>
          </form>

          <Link to="/AcompanharAtendimentos">
            <ButtonPages className={styles.botaoAcompanhar} text="Acompanhar atendimento"/>
          </Link>

        </div>
    )
};

export default CreatEditForm; 