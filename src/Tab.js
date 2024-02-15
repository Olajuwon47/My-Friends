import React from 'react';
import './index.css';
function Tab (props) {
    return(
    <header className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots " src={`https://robohash.org/${props.id}?200*200`} />;
        <h3>{props.name}</h3>
        <p>{props.gmail}</p>
    </header>
    
);   
}
export default Tab;