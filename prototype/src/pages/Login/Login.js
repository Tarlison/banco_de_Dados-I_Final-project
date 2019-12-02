import React from 'react';
import './login.css';

export default function Login({ history }){
  function handleSubmit(event){
    event.preventDefault(); //previne que o form faça sua função normal(trocar de página)

    history.push('/home');
  }
    
  return (
    <div className="login">
      
    <div className="main">
    <p> Trabalho de Banco de Dados I </p>
      <div className="conteudo-login">
        <form onSubmit={handleSubmit}>

          <label htmlFor="login">Login</label>
          <input 
            type="login" 
            placeholder="Login"
          />

          <label htmlFor="text">Senha</label>
          <input 
            type="password" 
            placeholder="Senha"
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
    </div>
  )
}