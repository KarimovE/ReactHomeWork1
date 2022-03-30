import logo from './logo.svg';
import './App.css';
import React from 'react';
import { getData } from './actions';
import Users from "./Users";
import Part1 from "./Components/Part1";
import Part2 from "./Components/Part2";

function App() {

  const [count, setCount]=React.useState(0);
  const [state, setState] =React.useState(true);
  
  const alter = (state) => {if (state) return <Part1 />; else return <Part2 />;};


  return (
<>
<div className='App'>
<h1 color="red">Result: {count}</h1>
<button onClick={()=>setCount(count+1)}>  Plus</button>
<button onClick={()=>setCount(count-1)}>  Minus</button>

{alter(state)}
<button  onClick={(state) => {if (state) setState(false); else setState(true);}}>change</button>
</div>


</>
  );
}

export default App;
