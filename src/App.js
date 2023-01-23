import React, { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import './App.css';


function App() {

  const [details, setDetails] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await data.json()
    setDetails(data)
    // console.warn('data', data)
  }

  return (
    <div className="App">
      <HomePage data={details} />


    </div>
  );
}

export default App;
