import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FindItem from '../src/components/Find/FindItem'
import LostItem from '../src/components/Lost/LostItem';
import { Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
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
        </header> */}
        
        <h1>Find & Lost</h1>
        <Link to={'/lost'}>Lost</Link>
        <br />
        <Link to={'/find'}>Find</Link>
        <Switch>
        <Route exact path='/lost' component={ LostItem } />
        <Route exact path='/find' component={ FindItem } />
        </Switch>
      </div>
    );
  }
}
export default App;
