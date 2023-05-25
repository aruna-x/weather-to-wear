import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import LocationSearchInput from './components/LocationSearchInput';

function App() {
  const [city, setCity] = useState('')

  return (
    <div className="App">
      <h1>Wondering what to wear today?</h1>
      <Flex>
        <LocationSearchInput city={city} setCity={setCity}/>
        <Button name="Submit" city={city}/>
      </Flex>
    </div>
  );
}

export default App;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`
