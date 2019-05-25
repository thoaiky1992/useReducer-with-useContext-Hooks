import React , {useReducer} from 'react';
import './App.css';
import Input from './Input';
import Reducer from './Reducer';
import {Context} from './Context';
import List from './List';
const initialState = {
	data : [
		{
			name : 'Ky'
		},
		{
			name : 'bao'
		},
	]
}
function App() {
	const [state,ditpatch] = useReducer(Reducer,initialState);
  	return (
    	<Context.Provider value={{state,ditpatch}}>
      		<div>
        		<Input />
				<List/>
      		</div>
    	</Context.Provider>
  	);
}

export default App;

