import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Tatuadores from "./pages/Tatuadores";
import Atendimentos from "./pages/Atendimentos"
import Cadastro from "./pages/Cadastro"
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import Loader from './pages/layout/Loader'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './pages/layout/Container/Container.jsx';
import './App.css';

function App() {

  
  const location = useLocation()
  const exibir = location.pathname === '/'

  return (
    
      <div className="App">

        {!exibir && <Header/>}

        <Container customClass= "min-height">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Contato">
              <Contato />
            </Route>

            <Route exact path="/Tatuadores">
              <Tatuadores />
            </Route>

            <Route exact path="/Atendimentos">
              <Atendimentos />
            </Route>

            <Route exact path="/Cadastro">
              <Cadastro />
            </Route>

            <Route exact path="/CadastroCliente">
              <CadastroCliente />
            </Route>

            <Route exact path="/Login">
              <Login />
            </Route>

            <Route exact path="/Loader">
              <Loader/>
            </Route>
          </Switch>
        </Container>

      {!exibir && <Footer/>}
      </div>

  );
}

export default App;
