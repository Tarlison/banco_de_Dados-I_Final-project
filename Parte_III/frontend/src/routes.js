import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/home';
import Stock from './pages/Stocks/Estoque';
import Cadastro from './pages/Cadastro/cad';
import Fornecedor from './pages/CadForn/cadForn';
import Editar from './pages/Edit/edit';
import ListaForn from './pages/ListaForn/ListaForn';
import CardList from './pages/Cartoes/CardList';
import FuncList from './pages/Func/FuncList';
import CadCard from './pages/Cartoes/Cad/CadCard';
import CadFunc from './pages/Func/Cad/CadFunc';
import Fechamentos from './pages/Closures/CList';
import FechamentosAdd from './pages/Closures/Add';
import FechamentosEdit from './pages/Closures/Edit';

/*<Route path="/dashboard" component={Dashboard}/>
  <Route path="/new" component={New}/>*/

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/stock" component={Stock}/>
        <Route path="/cad" component={Cadastro}/>
        <Route path="/cadForn" component={Fornecedor}/>
        <Route path="/editProd" component={Editar}/>
        <Route path="/ListaForn" component={ListaForn} />
        <Route path="/cards" component={CardList} />
        <Route path="/funcs" component={FuncList} />
        <Route path="/newCard" component={CadCard} />
        <Route path="/newFunc" component={CadFunc} />
        <Route path="/fechamentos" component={Fechamentos} />
        <Route path="/newfechamentos" component={FechamentosAdd} />
        <Route path="/editfechamentos" component={FechamentosEdit} />

      </Switch>
    </BrowserRouter>
  );
}