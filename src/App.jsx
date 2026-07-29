import { useEffect, useState } from "react"
import React from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  let [city, setCity] = useState("Kolkata")
  let [apiData, setApiData]= useState([])

  useEffect(() => {
    //console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setApiData(data);
    })
  }, [])


  return (
    <div>
      <h2>{count}</h2>
      <h2>{city}</h2>

      <button onClick={() => setCount(count => count + 1)}>
        Increase
      </button>

      <button onClick={() => setCity("Goa")}>
        Change City
      </button>

      <hr />
      {apiData.map((item)=> (
        <div key={item.id}>
          <p>ID: {item.id}</p>
          <p>Title: {item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default App