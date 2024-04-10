import React, { useEffect, useState } from 'react'


function App() {

  const [apiData, setApiData]= useState([]);

  useEffect(()=>{
    fetch("/api").then(
      responce=> responce.json()
    ).then(
      data=> setApiData(data)
    )
  },
[]);
  return (
    <div>App</div>
  )
}

export default App