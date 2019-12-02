import React, {useState} from 'react';
import {withRouter, useHistory } from 'react-router-dom';
import Axios from 'axios';

import './edit.css';

function Editar(props){

  const[valorAlt, setValorAlt] = useState('');

  let history = useHistory();
  const dados = JSON.stringify(props.location.data);
  const obj = JSON.parse(dados);

  console.log("q q tem : " + obj.nome);

  function handleSubmit(event){
    event.preventDefault();

    let objAlt = {
      dinheiro: valorAlt,
    };

    if (objAlt.dinheiro === ''){
      objAlt = {
        dinheiro: obj.dinheiro,
      };
    }

    const jsonStringfied = JSON.stringify(objAlt);

    console.log(jsonStringfied);

    Axios.put(`http://localhost:3333/fechamentos/${obj.id}`,jsonStringfied,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Fechamento Alterado Com Sucesso!")

    history.push('/home');
  }


  function cancelEd(event){
    event.preventDefault();

    history.push('/fechamentos');
  }

  return(

    <div className="editar">
      
      <p>Editar Fechamento</p>

      <div className="editor-container">

        <form onSubmit={handleSubmit}>

        <label htmlFor="valor">Valor</label>
        <input 
          id="valorAlt"
          placeholder={obj.dinheiro}
          value={valorAlt}
          onChange={event => setValorAlt(event.target.value)}
        />

        <div className="buttonContainer">
          <button type="submit" className="btn">Alterar</button>
          
          <button onClick={cancelEd} className="btn">
              Cancelar
          </button>
          
        </div>

        </form>
      </div>
    </div>
  )
}

export default withRouter(Editar);