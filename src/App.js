import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Tatuadores from "./pages/Tatuadores";
import Atendimentos from "./pages/Atendimentos"
import Artes from "./pages/Artes"


import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/Contato" element={<Contato />}></Route>

          <Route path="/Tatuadores" element={<Tatuadores />}></Route>

          <Route path="/Atendimentos" element={<Atendimentos />}></Route>

          <Route path="/Artes" element={<Artes />}></Route>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
