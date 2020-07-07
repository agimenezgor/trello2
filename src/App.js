import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Principal from './components/Principal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <main className="App-main">
        <Principal/>
      </main>
    </div>
  );
}

export default App;
