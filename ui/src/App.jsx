import './App.css';
import { useState } from 'react';

import styled from 'styled-components';
import Button from './components/Button';
import LocationSearchInput from './components/LocationSearchInput';

function App() {
  const [city, setCity] = useState('');
  const [rec, setRec] = useState('');

  return (
    <div className="App">
      {rec ? <h1>What to wear today in {city}</h1>: <h1>Wondering what to wear today?</h1>}
      {rec ? <p>{rec}</p> : null}
      <Flex>
        <LocationSearchInput city={city} setCity={setCity}/>
        <Button name="Submit" city={city} setRec={setRec}/>
      </Flex>
    </div>
  );
}

export default App;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`
