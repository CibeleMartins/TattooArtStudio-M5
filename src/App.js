import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Tatuadores from "./pages/Tatuadores";
import Atendimentos from "./pages/Atendimentos"
import Cadastro from "./pages/Cadastro"
import CadastroCliente from './pages/CadastroCliente';
import CadastroTatuador from './pages/CadastroTatuador';
import Login from './pages/Login';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './pages/layout/Container/Container';
import './App.css';

function App() {

  const exibir = window.location.href.includes('teste')

  return (
    <BrowserRouter>
      <div className="App">
        {exibir && <Header/>}

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

            <Route exact path="/CadastroTatuador">
              <CadastroTatuador />
            </Route>

            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
        </Container>

      {exibir && <Footer/>}
      </div>

    </BrowserRouter>

  );
}

export default App;
