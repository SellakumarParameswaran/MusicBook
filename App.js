import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import Login from './../src/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Main from './main';
import MinPay from './MinPay';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Main App component
const App = () => {
 

  return (
    <div className="app">
      
      
      <>

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/main" component={Main} /> 
    <Route path="/Pay" component={MinPay} /> 
  </Switch>
</BrowserRouter>
         </>
      
      
    </div>
  );
};

//ReactDOM.render(<App />, document.getElementById('root'));

export default App;
