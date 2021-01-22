import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import'mdbreact/dist/css/mdb.css';
import { BrowserRouter , Switch, Route} from 'react-router-dom'

import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
