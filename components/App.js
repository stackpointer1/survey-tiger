// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Published from './components/Published';
import { useState} from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [squestions, setSquestions] = useState([])
  return (
    <>
    <div className="col-md-10 offset-md-1 col-12 text-center">
    
    <Router>
    <Link to="/">
      <img className="col-md-6" alt='logo' src={Logo}/>
      </Link>
      <Switch>
      
        <Route path="/"component={Menu} exact/>
        <Route path="/Create" exact >
        <CreateSurvey squestions={squestions}></CreateSurvey>
        </Route>
        <Route path="/published"component={Published} />
        
      </Switch>
    </Router>


    </div>
  </>
  );
}

export default App;
