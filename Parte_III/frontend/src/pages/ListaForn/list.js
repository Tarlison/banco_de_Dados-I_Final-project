import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './ListaForn.css';
import Axios from 'axios';


let componentsObjects = [];

class TabelaForn extends Component{

  
  constructor(props){
    super(props);

    this.state = {
      objects: null,
      components: []
    }

    this.renderTableData = this.renderTableData.bind(this);
    //this.renderTableHeader = this.renderTableHeader.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  
    
  }

  componentDidMount(){

    componentsObjects = [];

    this.tableHandler().then((result) => {
      this.setState({components: result});
    });
  }

  handleReturn () {
    const {history} = this.props;
    
   
    history.push('/home');
  }

  hendleDelete(data){
    const {history} = this.props;
    console.log("dado a ser deletado: " + data);

    const DelData = JSON.stringify(data);
    console.log("dado a ser deletado stringficado: " + DelData.id);
    const DelDataJson = JSON.parse(DelData);
    console.log("dado a ser deletado stringficado parseando: " + DelDataJson.id);

    Axios.delete(`http://localhost:3333/fornecedores/${DelDataJson.cnpj}`,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert('Fornecedor removido com sucesso!');

    history.push('./home');
  }

  /* async renderTableHeader(response){

      alert(JSON.stringify(response));

      let header = Object.keys(response.data[0])
      return header.map((key, index) =>{
        return <th key={index}>{key.toUpperCase()}</th>
      });

  
  } */

  async tableHandler(){

     return await Axios.get('http://localhost:3333/fornecedores').then(response => {
      console.log("stock_js:"+JSON.stringify(response.data));
   
      return(
        <tbody>
         {this.renderTableData(response.data)}
        </tbody>
      );

    });

  
  }

  renderTableData(response){
    
    let jsonObj = JSON.parse(JSON.stringify(response));

    console.log(jsonObj.length);

    for (let i = 0 ; i<jsonObj.length;i++){
      componentsObjects.push(
        <tr key={jsonObj[i].id}>
          <td>{jsonObj[i].cnpj}</td>
          <td>{jsonObj[i].nome_fantasia}</td>
          <td>{jsonObj[i].nome_produto}</td>
          <td>{jsonObj[i].endereco}</td>
          <td>
            <button 
              id={jsonObj[i].id} 
              onClick={() => this.hendleDelete(jsonObj[i])}
              className="DeleteButton"
            >
              Remover
            </button>
          </td>
        </tr>
      );
    }

    return componentsObjects;
  }

  render(){
  //const { history } = this.props;

    return(
      <div className="listaForn">
        <div className="container-forn">
          <table id="listaForn">
          <tr>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Produto</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
            {this.state.components}
          </table>
        </div>
        <button onClick={this.handleReturn} className="returnBF">Voltar</button>
      </div>
    )
  }

}

export default withRouter(TabelaForn);
