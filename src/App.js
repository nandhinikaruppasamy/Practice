import logo from './logo.svg';
import './App.css';
import Theme from './components/theme';
import Props from './components/Props';
import { useState } from 'react';

function App() {
  const[username,setUsername] = useState("John");
  return (
    <div className="App">
      <Props name = {username}/>
    </div>
  );
}

export default App;
