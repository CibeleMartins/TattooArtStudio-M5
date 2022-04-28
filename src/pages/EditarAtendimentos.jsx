import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import api from "../services/api"
import styles from "./Atendimentos.module.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


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

};