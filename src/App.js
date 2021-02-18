import logo from './images/icon.png';
import './App.css';
import Acceuil from './pages/Acceuil';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


      <Switch>

           <Route path='/' component={}  />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
