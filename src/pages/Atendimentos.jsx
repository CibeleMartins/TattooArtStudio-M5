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
    return ( 
        <div className={styles.fundo}>
            
          <form onSubmit={handleSubmit(editable? editar : agendar )} className={styles.form}>
            <h2>Preencha os campos abaixo e solicite um atendimento</h2>
            <div className={styles.divDisplay}>
              <div className={styles.divComponentes}>
                <label>Informe seu nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={editable? Atendimento.nome : undefined}
                  {...register("nome")}
                  placeholder="Insira seu nome"
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
                />
              </div>
            </div>
    
            <input
              type="text"
              name="telefone"
              value={editable? Atendimento.telefone : undefined}
              {...register("telefone")}
              placeholder="Insira seu Telefone"
            />
    
            <input
              type="text"
              name="cidade"
              value={editable? Atendimento.cidade : undefined}
              {...register("cidade")}
              placeholder="Insira sua Cidade"
            />
    
            <input
              type="text"
              name="estado"
              value={editable? Atendimento.estado : undefined}
              {...register("estado")}
              placeholder="Insira seu Estado"
            />
            <input
              type="text"
              name="data"
              value={editable? Atendimento.data : undefined}
              {...register("data")}
              placeholder="Insira a data que você gostaria"
            />
            <input
              type="text"
              name="horário"
              value={editable? Atendimento.horário : undefined}
              {...register("horário")}
              placeholder="Insira o horário que você gostaria"
            />

            <br/>
            
            <button type="submit"> {editable? "Editar" : "Agendar"}</button>
          </form>

          <Link to="/AcompanharAtendimentos">
            <ButtonPages/>
          </Link>

        </div>
    )
};

export default CreatEditForm; 