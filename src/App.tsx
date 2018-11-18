import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Map from './map';
import { MapData } from './map/types';

function repeat<T>(limit:number, item: T): T[] {
  const data = [];
  let index = 0;
  while (index < limit) {
    data.push(item);
    ++index;
  }
  return data;
}

const cellData = repeat(100, true);
cellData[5] = false;
cellData[6] = false;
cellData[16] = false;

const map: MapData = {
  cells: cellData,
  height: 10,
  width: 10,
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map mapData={map}/>
      </div>
    );
  }
}

export default App;
