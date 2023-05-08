import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [name, setName] = useState('');

    const onNameChange = ({ value }) => {
        setName(value);
    };

    return (
        <div>
            <form action='submit'>
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
