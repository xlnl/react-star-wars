import React from "react";
// React Router
import { Route } from 'react-router-dom';

// Components imports
import Layout from "./components/common/Layout";
import Home from "./components/Home";
import StarshipPage from "./components/Home";

// CSS imports
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Home}/>
        <Route path="/starship" render={({location}) => <StarshipPage location={location}/>}/>
      </Layout>
    </div>
  );
}


export default App;
