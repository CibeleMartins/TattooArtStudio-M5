import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import Card from "../../components/Card/Cards.jsx";



const ShowScheduling = () => {
  const [Scheduling, setScheduling] = useState([]);
  const [Update, setUpdate] = useState(false);
 
 const history = useHistory()

  useEffect(() => {
    api.get(`/atendimentos`).then((response) => {
      setScheduling(response.data);
      console.log('atendimento',response.data)
    });
  }, [Update]);


 
  const EditarCard = (id) => {
    console.log('editar')
    history.push(`/EditarAtendimentos/${id}`)

 
  }


  const ExcluirCard = (id) => {

    console.log(id)
     api.delete(`/atendimentos/${id}`).then(() => setUpdate(true)); 
    }
      return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {Scheduling.map((atendimentos) => {
            return (
            <Card
              key={atendimentos._id}
              id={atendimentos._id}
              nome={atendimentos.nome}
              email ={atendimentos.email}
              telefone={atendimentos.telefone}
              cidade={atendimentos.cidade}
              data={atendimentos.data}
              horário={atendimentos.horário}
              deletar={ExcluirCard}
              edit={EditarCard}
            />
          );
        })}
      </div>
    </div>
  );

};

export default ShowScheduling;