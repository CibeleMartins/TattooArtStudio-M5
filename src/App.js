import React from 'react';
import { BrowserRouter, Route, } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import PageTeste from './pages/PageTeste';
import Container from './pages/layout/Container/Container';


function App() {

  const exibir = window.location.href.includes('teste')

  return (

    <BrowserRouter>

      {exibir && <Header/>}
    

      <Container customClass= "min-height">

        <Route exact path='/'>
          <Home/>
        </Route>
        
        <Route exact path='/teste'>
          <PageTeste/>
        </Route>

      </Container>

      {exibir && <Footer/>}

    </BrowserRouter>

  );
}

export default App;
