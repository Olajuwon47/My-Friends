import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, 
  REQUEST_ROBOTS_FAILED ,
   } from "./constants.js";
/*const useState={
const:[searchfield, setsearchfield] =useState('')
}
export const searchRobots= (state=useState, action={}) =>{
  switch(action.type) {
  case CHANGE_SEARCH_FIELD:
  return Object.assign({},state, searchfield: action.payload)
  } 
}*/
const initialStateSearch  = {
    searchfield: ''
  };
  
  export const searchRobots = (state = initialStateSearch, action = {}) => { 
    switch (action.type) {
      case CHANGE_SEARCH_FIELD:
        return { ...state,searchfield: action.payload };
      default:
        return state;
    }
  };
  const initialRobotsState = {
    ispending: false,
    robots: [],
    error: '',
  };
  
export const requestRobots= (state = initialRobotsState, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state,ispending:true};

      case REQUEST_ROBOTS_SUCCESS: 
      return { ...state,robots: action.payload,ispending:false};

      case REQUEST_ROBOTS_FAILED:
        return { ...state,error: action.payload,ispending:false};
        default:
          return state; 
  }
}; 
