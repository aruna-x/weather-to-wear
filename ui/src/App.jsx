import { useState } from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import LocationSearchInput from './components/LocationSearchInput';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [rec, setRec] = useState('');
  const [loading, setLoading] = useState(false);

  function Rec({rec}) {
    return rec ? <P>{rec}</P> : null;
  }

  function Loading() {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Wondering what to wear?</h1>
      {loading ? <Loading />: <Rec rec={rec}/>}
      <Flex>
        <LocationSearchInput city={city} setCity={setCity}/>
        <Button name="Submit" city={city} setRec={setRec} setLoading={setLoading}/>
      </Flex>
    </div>
  );
}

export default App;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const P = styled.p`
  max-width: 75%;
  margin: auto auto 35px auto;
`
