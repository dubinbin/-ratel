import React, { FC } from 'react';
import './App.css'
import { MainBoard } from './components/MainBoard';
import './plugins'

const App: FC = (props: any) => (
  <div className="App">
      <MainBoard {...props}/>
  </div>
);

export default App;