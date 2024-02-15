import React, { Component } from 'react';
import Tablist from './Tablist.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';
import './App.css';
 class App extends Component{
constructor(){ 
    super()
    this.state = {
    robots: robots,
    searchfield: '',
}
}
onSearchChange = (event) => {
    this.setState({searchfield: event.target.value })
}
render() {
    const filteredRobots = this.state.robots.filter(robots => {
       return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })   
    return(
        <header className='tc'>
        <h1 className='f1'>wlecome to my robots page</h1>
        <SearchBox searchChange={this.onSearchChange}/>
       <Tablist robots = {filteredRobots}/>
</header>
);      
}
}
export default App;