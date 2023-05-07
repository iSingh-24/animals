import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [name, setName] = useState('');

    const onUserSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/', {
            firstName: name,
            lastName: 'default',
        });

        console.log(response, 'here is response');
    };

    const onChange = (e) => {
        let currName = e.target.value;
        console.log(currName, 'here is current name');

        setName(currName);
    };

    return (
        <div>
            <form action='submit' onSubmit={onUserSubmit}>
                <input
                    type='text'
                    placeholder='enter username here'
                    onChange={(e) => onChange(e)}
                />
                <button type='submit'>create user</button>
            </form>
        </div>
    );
};

export default App;
