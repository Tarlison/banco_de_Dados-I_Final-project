import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './list.css';
import Axios from 'axios';


let componentsObjects = [];

class CTabela extends Component{

  
  constructor(props){
    super(props);

    this.state = {
      objects: null,
      components: []
    }

    this.handleReturn = this.handleReturn.bind(this);
    this.hendleEdit = this.hendleEdit.bind(this);
    this.renderTableData = this.renderTableData.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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

  hendleEdit (data){
    const {history} = this.props;
    console.log("antes do edito prod :")
    console.log(data);
    history.push({
      pathname: '/editfechamentos',
      data: data
    });
  }

  hendleDelete(data){
    const {history} = this.props;
    console.log("dado a ser deletado: " + data);

    const DelData = JSON.stringify(data);
    console.log("dado a ser deletado stringficado: " + DelData.id);
    const DelDataJson = JSON.parse(DelData);
    console.log("dado a ser deletado stringficado parseando: " + DelDataJson.id);

    Axios.delete(`http://localhost:3333/fechamentos/${DelDataJson.id}`,{
      headers: {
          'Content-Type': 'application/json',
      }}).then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    });

    alert('Fechamento removido com sucesso!');

    history.push('./home');
  }

/*   async renderTableHeader(response){

      alert(JSON.stringify(response));

      let header = Object.keys(response.data[0])
      return header.map((key, index) =>{
        return <th key={index}>{key.toUpperCase()}</th>
      });

  
  } */

  async tableHandler(){

     return await Axios.get('http://localhost:3333/fechamentos').then(response => {
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
          <td>{jsonObj[i].createdAt}</td>
          <td>{jsonObj[i].dinheiro}</td>
          <td>
            <button 
              id={jsonObj[i].id} 
              onClick={() => this.hendleEdit(jsonObj[i])}
              className="EditButton"
            >
              Editar
            </button>
            <button 
              id={jsonObj[i].id} 
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

  handleAdd(event){
    event.preventDefault();
    const {history} = this.props;

    history.push('/newfechamentos');

  }

  render(){
  

    return(
      <div className="listaClose">
        <div className="container-closure">
          <table id="listaClose">
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
            {this.state.components}
          </table>
        </div>
        <button onClick={this.handleAdd} className="addBC">Adicionar</button>
        <button onClick={this.handleReturn} className="returnBC">Voltar</button>
      </div>
    )
  }

}

export default withRouter(CTabela);
