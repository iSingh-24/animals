import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [message, setMessage] = useState('');

    const onMessageChange = ({ value }) => {
        setMessage(value);
    };

    const onPostSubmit = async (event) => {
        event.preventDefault();
        const { data } = await axios.post('http://localhost:3000/api/post', {
            message,
        });
        console.log(data, 'here is data');
    };

    return (
        <div>
            <form action='submit' onSubmit={onPostSubmit}>
                <input
                    type='text'
                    onChange={({ target }) => onMessageChange(target)}
                />
                <button type='submit'>Create Post</button>
            </form>
        </div>
    );
};

export default CreatePost;
