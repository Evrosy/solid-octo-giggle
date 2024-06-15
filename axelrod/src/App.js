import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Results from './components/Results';
import Info from './components/Info';
import { handleScenario, getInfoText } from './utils/scenarioHandlers';
import './App.css';

function App() {
  const [results, setResults] = useState(null);
  const [info, setInfo] = useState("");

  const handleClick = (scenario) => {
    const newResults = handleScenario(scenario);
    setResults(newResults);
    setInfo(getInfoText(scenario));
  };

  return (
    <div className="App">
      <Buttons handleClick={handleClick} />
      <Results results={results} />
      <Info info={info} />
    </div>
  );
}

export default App;