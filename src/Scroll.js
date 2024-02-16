import React from 'react';
   const Scroll= (props) =>{
    return(
   <header style= {{overflow:'Scroll', border: '1px solid black', height:'600px'}}>
          {props.children} 
   </header>
);
};
export default Scroll;