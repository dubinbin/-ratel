import React, { FC } from 'react';
import './App.css'
import { MainBoard } from './components/MainBoard';
import './plugins'

const App: FC = () => (
  <div className="App">
      <MainBoard/>
  </div>
);

export default App;