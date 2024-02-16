import React, { Component } from 'react';
import Tablist from './Tablist.js';
import SearchBox from './SearchBox.js';
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
    const filteredRobots = this.state.robots.filter(robots => {
       return  robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    }) 
    /*this code is  for multiply users*/
    if(this.state.robots.length === 0) {
        return <h1>loading</h1>
    } else{
    return(
        <header className='tc'>
        <h1 className='f1'>wlecome to my robots page</h1>
        <SearchBox searchChange={this.onSearchChange}/>
       <Tablist robots = {filteredRobots}/>
</header>
);      
}
}
}
export default App;