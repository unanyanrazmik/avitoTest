import React from 'react';
import './App.css';
import DescriptionContainer from "./components/Description/DescriptionContainer";
import {Route} from "react-router-dom";
import RepositoriesContainer from "./components/Repositories/RepositoriesContainer";


function App() {
  return (
    <div className="App">
        <Route path="/repositories" component={RepositoriesContainer}/>
        <Route path="/description/:id?" component={DescriptionContainer}/>
    </div>
  );
}

export default App;
