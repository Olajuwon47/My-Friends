import React, { useState, useEffect } from 'react';
import Tablist from '../components/Tablist.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
  function App() {
const [robots, setrobots] =useState([]);
const [searchfield, setsearchfield] =useState('');
const [count, setCount] =useState(0);
useEffect(() => {
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response=> response.json())
    .then(users=>{setrobots(users) });
    console.log(count)
  },[count]);//only run if count changes. 
const onSearchChange = (event) => {
    setsearchfield(event.target.value);
}
    const filteredRobots = robots.filter(robot => {
       return  robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    /*this code is  for multiply users if(robots.length === 0){ */
    return !robots.length?
        <h1>loading</h1>:
    (
        <header className='tc'>
        <h1 className='f1'>wlecome to my robots page</h1>
        <button onClick={() => setCount(count + 1)}>
        Click me!!
      </button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
       <Tablist robots = {filteredRobots}/>
       </Scroll>
</header>
);      
}
export default App;