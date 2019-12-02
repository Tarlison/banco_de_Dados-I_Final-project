import React, {useState, Component} from 'react';
import { withRouter } from 'react-router-dom';
import { tsImportEqualsDeclaration } from '@babel/types';

class Editor extends Component{
  constructor(props){
    super(props);

    this.state = {
      produto: this.props.location.data,
      produtoAltNome: '',
      produtoAltDesc: '',
      produtoAltPreco: 0,
      produtoAltQuantidade: 0,
      produtoAltFornecedor: ''
        
    }

    this.handleReturn = this.handleReturn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }


  handleReturn() {
    const {history} = this.props;
   
    history.push('/stock');
  }

  handleSubmit() {
    const {history} = this.props;

    //history.push('/home');
  }

  testeSub(){
    let obj = {
      nome: this.state.produtoAltNome
    }

    const jsonString = JSON.stringify(obj);
    console.log(jsonString);
  }

  updateState(){
    this.setState({
      produto:this.props.location.data
    })
  }


  render(){
    const { history } = this.props;
    const jsonObj = JSON.stringify(this.state.produto);
    const jsonObj2 = JSON.parse(jsonObj);
    console.log(jsonObj2.id);
    return(
      <div className="editor-container">
        <form onSubmit={this.handleSubmit}>

        <label htmlFor="nome">Nome</label>
        <input 
          id="nomeAlt"
          placeholder={jsonObj2.nome}
          onChange={event => this.setState({
            produtoAltNome:event.target.value
          })}
        />

        <label htmlFor="desc">Descrição</label>
        <input 
          id="descAlt"
          placeholder={jsonObj2.desc}
        />

        <label htmlFor="preco">Preço</label>
        <input
          id="precoAlt"
          placeholder={jsonObj2.preco}
        />

        <label htmlFor="qnt">Quantidade</label>
        <input
          id="qntAlt"
          placeholder={jsonObj2.quantidade}
        />

        <label htmlFor="forn">Fornecedor</label>
        <input
          id="fornAlt"
          placeholder={jsonObj2.nome_fornecedor}
        />

        <div className="buttonContainer">
          <button onClick={this.testSub} className="btn">Cadastrar</button>
          <button onClick={this.handleReturn} className="btn">Cancelar</button>
        </div>

        </form>
      </div>
    )
  }
}

export default withRouter(Editor);