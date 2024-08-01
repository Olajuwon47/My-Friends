import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Tablist from '../components/Tablist.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
import {setsearchField, requestRobots} from "../action.js";
function App({ searchField = '', onRequestRobots, onSearchChange,robots, ispending }) {
//const [robots, setrobots] =useState([]);
//const [searchfield, setsearchfield] =useState('');
//const [count, setCount] =useState(0);
//const [store, setStore] =useState('');
useEffect(() => {
  onRequestRobots();
    /*fetch('https://jsonplaceholder.cypress.io/users')
    .then(response=> response.json())
    .then(users=>{setrobots(users) });*/
    ///console.log(store.getstate())
    //console.log(count)
  },[onRequestRobots]);//only run if count changes. 
/*const onSearchChange = (event) => {
    setsearchfield(event.target.value);
}*/
    const filteredRobots = robots.filter(robot => {
       return  robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    /*this code is  for multiply users if(robots.length === 0){ */
    //return !robots.length?
    return ispending?
        <h1>loading</h1>:
    (
        <header className='tc'>
        <h1 className='f1'>welcome to my robots page</h1>
        {/*<button onClick={() => setCount(count + 1)}>
        Click me!!
      </button>*/}
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
       <Tablist robots = {filteredRobots}/>
       </Scroll>
       
</header>
);      
}
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    ispending: state.requestRobots.ispending,
    error:state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setsearchField(event.target.value)),
    onRequestRobots:() =>dispatch(requestRobots())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);