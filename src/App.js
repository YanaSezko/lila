import './App.css';
import Cube from './components/Cube/Cube';
import Field from './components/Field/Field';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="App">
      <Player id='1' />
      <div className='wrapper'>
        <Field />
        <Cube />
      </div>
    </div>
  );
}

export default App;
