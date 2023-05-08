import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');

    const onNameChange = ({ value }) => {
        setName(value);
    };

    const onUserSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:3000/api/user', {
            name,
        });
        console.log(`here is data ${data}`);
    };

    return (
        <div>
            <form action='submit' onSubmit={onUserSubmit}>
                <input
                    type='text'
                    onChange={({ target }) => onNameChange(target)}
                />
                <button type='submit'>Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;
