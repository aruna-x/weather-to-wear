import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
        <Input placeholder="Location"/>
      <Button name="Submit"/>
    </div>
  );
}

export default App;
