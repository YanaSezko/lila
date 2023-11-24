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
      <a href='https://instagram.com/gra_lila_ua?igshid=MTk0NTkyODZkYg=='>Описание&nbsp;клеток</a>
      <p className='cop'>All rights reserved © Created by Sezko Yana</p>
    </div>
  );
}

export default App;
