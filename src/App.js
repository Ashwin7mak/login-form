import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import Signup from './components/signup.component';
import Welcomepage from './components/welcomepage.component'
import './App.css';

createStore({
  data: {
    firstName: '',
    email: '',
    password: ''
  }
});

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <StateMachineProvider>
            <Router>
              <Route exact path="/" component={Signup} />
              <Route path="/sign-up" component={Signup} />
              <Route path="/welcome" component={Welcomepage} />
            </Router>
          </StateMachineProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
