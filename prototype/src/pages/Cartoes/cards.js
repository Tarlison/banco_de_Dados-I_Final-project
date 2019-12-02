import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './cards.css';
import Axios from 'axios';


let componentsObjects = [];

class TabelaCards extends Component{

  
  constructor(props){
    super(props);

    this.state = {
      objects: null,
      components: []
    }

    this.handleReturn = this.handleReturn.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    //this.renderTableHeader = this.renderTableHeader.bind(this);
  
    
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

    Axios.delete(`http://localhost:3333/cartoes/${DelDataJson.numero}`,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    }); 

    alert('Cartão removido com sucesso!');

    history.push('./home');
  }

/*   async renderTableHeader(response){

      alert(JSON.stringify(response));

      let header = Object.keys(response.data[0])
      return header.map((key, index) =>{
        return <th key={index}>{key.toUpperCase()}</th>
      });

  
  }
 */
  async tableHandler(){

    return await Axios.get('http://localhost:3333/cartoes').then(response => {
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
        <tr key={jsonObj[i].numero}>
          <td>{jsonObj[i].numero}</td>
          <td>{jsonObj[i].proprietario}</td>
          <td>{jsonObj[i].data_de_validade}</td>
          <td>{jsonObj[i].situacao}</td>
          <td>
            <button 
              id={jsonObj[i].numero} 
              onClick={() => this.hendleDelete(jsonObj[i])}
              className="DeleteButton"
            >
              Deletar
            </button>          
          </td>
        </tr>
      );
    }

    return componentsObjects;
  }

  render(){
  

    return(
      <div className="listaCard">
        <div className="container-card">
          <table id="listaCard">
          <tr>
            <th>Numero</th>
            <th>Proprietário</th>
            <th>Valiade</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
            {this.state.components}
          </table>
        </div>
        <button onClick={this.handleReturn} className="returnB">Voltar</button>
      </div>
    )
  }

}

export default withRouter(TabelaCards);
