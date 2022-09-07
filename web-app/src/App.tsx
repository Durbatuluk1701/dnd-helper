import React from 'react';
import './App.css';
import { Power } from './components';

export const App = () :JSX.Element => {
  const examplePower: PowerModel = {
    name: 'The Coolest Power',
    type: 'AtWill',
    description: '',
    actionType: 'Standard',
    range: {
      standard: 0,
      long: 0
    },
    level: 0,
    className: 'Cleric',
    keywords: [],
    damageType: 'Acid',
    flavorText: 'This power does stuff'
  }

  return (
    <div className="App">
      <header className="App-header">
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
        <Power powerMod={examplePower} />
      </header>
    </div>
  )
}
