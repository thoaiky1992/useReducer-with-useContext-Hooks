import React , { useContext} from 'react';
import {Context} from './Context';

function Input(){
    const { state , ditpatch } = useContext(Context);
    return (
        <div>
            <h1>{state.name}</h1>
			<button onClick={() => ditpatch({type:'EDIT',data:'pham ngoc thoai ky'})}>EDIT NAME</button>
        </div>
    );
}
export default Input;