import React , {useReducer} from 'react';
import './App.css';
import Input from './Input';
import Reducer from './Reducer';
import {Context} from './Context';
const initialState = {
	name : 'bao bao'
}
function App() {
	const [state,ditpatch] = useReducer(Reducer,initialState);
  	return (
    	<Context.Provider value={{state,ditpatch}}>
      		<div>
        		<Input />
      		</div>
    	</Context.Provider>
  	);
}

export default App;

