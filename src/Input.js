import React, { useContext, useState } from 'react';
import { Context } from './Context';

function Input() {
    const { ditpatch } = useContext(Context);
    const [name, setName] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        ditpatch({ type: 'ADD', data: name });
        setName('');
    }

    return (
        <div style={{ margin: 'auto', width: '500px' }}>
            <form onSubmit={onSubmit} >
                <input className="form-control" style={{ marginTop: '20px' }} value={name} onChange={(e) => setName(e.target.value)} />
            </form>
        </div>
    );
}
export default Input;