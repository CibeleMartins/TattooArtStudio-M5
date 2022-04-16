import React from 'react';
import { BrowserRouter} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';


function App() {


  return (

    <BrowserRouter>

      <Home/>
    

    </BrowserRouter>
  );
}

export default App;
