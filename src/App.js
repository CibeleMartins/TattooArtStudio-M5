import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';


function App() {
  return (

    <BrowserRouter>

      <Home/>
    

    </BrowserRouter>
  );
}

export default App;
