import React from 'react';
import './App.css';
import DescriptionContainer from "./components/Description/DescriptionContainer";
import {Redirect, Route, Switch} from "react-router-dom";
import RepositoriesContainer from "./components/Repositories/RepositoriesContainer";


function App() {
  return (
    <div className="App">
        <Switch>
        <Route path="/repositories" component={RepositoriesContainer}/>
        <Route path="/description/:id?" component={DescriptionContainer}/>
        <Route path="/" component={() => <Redirect to = '/repositories'/>}/>
        </Switch>
    </div>
  );
}

export default App;
