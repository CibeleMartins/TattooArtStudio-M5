import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Tatuadores from "./pages/Tatuadores";
import Atendimentos from "./pages/Atendimentos"
import Artes from "./pages/Artes"

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
      <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/Contato" element={<Contato />}></Route>

          <Route exact path="/Tatuadores" element={<Tatuadores />}></Route>

          <Route exact path="/Atendimentos" element={<Atendimentos />}></Route>

          <Route exact path="/Artes" element={<Artes />}></Route>
        </Routes>
      </Container>

      {exibir && <Footer/>}
      </div>

    </BrowserRouter>

  );
}

export default App;
