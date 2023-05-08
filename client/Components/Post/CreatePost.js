import React, { useState } from 'react';

const CreatePost = () => {
    const [message, setMessage] = useState('');

    const onMessageChange = ({ value }) => {
        setMessage(value);
    };

    return (
        <div>
            <form action='submit'>
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
