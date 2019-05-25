import React, { useContext } from 'react';
import { Context } from './Context';
function List() {
    const { state } = useContext(Context);
    return (
        <div style={{ margin: 'auto', width: '500px' }}>
            <ul>
                {state.data.map((item, index) => {
                    return (<li key={index}>{item.name}</li>)
                })}
            </ul>
        </div>
    );
}
export default List;