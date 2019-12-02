import React, {useState} from 'react';
import './add.css';
import Axios from 'axios';

export default function FechamentosAdd({history}){

  const[valor, setValor] = useState('');

  function handleSubmit(event){
    event.preventDefault();

    let obj = {
      dinheiro: valor
    };

    console.log(obj);
    const jsonString = JSON.stringify(obj);
    console.log(jsonString);

    Axios.post('http://localhost:3333/fechamentos',obj,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert("Fechamento adicionado com sucesso!")

    history.push('/home');
  }

  function cancelFech(event){
    event.preventDefault();

    history.push('/fechamentos');
  }
  
  return(
    <div className="cadFech">
    <div className="contayner-fech">
      <div className="conteudo-fech">
        <form onSubmit={handleSubmit}>

          <label htmlFor="valor">Valor</label>
          <input 
            id="valor"
            placeholder="Valor em reais"
            value={valor}
            onChange={event => setValor(event.target.value)}
          />

          <div className="buttonContainer">
            <button type="submit" className="btn">Adicionar</button>
            <button onClick={cancelFech} className="btn">Cancelar</button>
          </div>


        </form>
      </div>
    </div>
    <div className="pageTitleFech">
      <p>Adicionar Fechamento</p>
    </div>
    </div>
  )
}