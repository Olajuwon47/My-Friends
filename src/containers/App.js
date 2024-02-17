import React, { Component } from 'react';
import Tablist from '../components/Tablist.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';
 class App extends Component{
constructor(){ 
    super()
    this.state = {
    robots: [],
    searchfield:'',
}
}
componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
    .then(response=> response.json())
    .then(users=>this.setState({robots: users }));
}
onSearchChange = (event) => {
    this.setState({searchfield: event.target.value });
}
render() {
     const{robots, searchfield}=this.state;  
    const filteredRobots = robots.filter(robot => {
       return  robot.name.toLowerCase().includes(searchfield.toLowerCase());
    }) 
    /*this code is  for multiply users if(robots.length === 0){ */
    return !robots.length?
        <h1>loading</h1>:
    (
        <header className='tc'>
        <h1 className='f1'>wlecome to my robots page</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
       <Tablist robots = {filteredRobots}/>
       </Scroll>
</header>
);      
}
}
export default App;