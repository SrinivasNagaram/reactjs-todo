import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 

import { createStore } from 'redux';

function reducer(state, action) {
	if(action.type === "ChangeState") {
		return action.payload.newState;
	}
	return "State";
} 

const store = createStore(reducer);

const action = {
	type: "ChangeState",
	payload: {
		newState: 'newState'
	}
}

store.dispatch(action);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));  
