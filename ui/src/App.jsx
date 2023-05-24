import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import LocationSearchInput from './components/LocationSearchInput';

function App() {
  return (
    <div className="App">
      <h1>Wondering what to wear today?</h1>
      <LocationSearchInput />
      <Button name="Submit"/>
    </div>
  );
}

export default App;
