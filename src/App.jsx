//import ArrayMethods from "./components/ArrayMethods";
//import Lists from "./components/Lists";

//function App() {

//  return (
//    <>
//      <ArrayMethods />
//      <Lists />
//    </>
//  );
//}

//export default App;

import React, {useState} from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  let [color, setColor] = useState("red")
  return (
    <div style= {{backgroundColor: color, height:"100vh"}}>
      <button onClick={()=> setColor("gold")}>change bg colour</button>
      <h2>{count}</h2>
      <button onClick = {()=> setCount(count+1)}>increase</button>
      <button onClick={()=> setCount(count-1)}>decrease</button>
      <button onClick={()=> setCount(count=0)}>reset</button>
    </div>
  )
}


export default App
