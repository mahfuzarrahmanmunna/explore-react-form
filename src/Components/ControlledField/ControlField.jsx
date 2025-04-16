import React, { useState } from 'react';

const ControlField = () => {

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    const handlePasswordOnChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        if (password.length < 6) {
            setError('Password must be 6 characters or longer.')
        } else {
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' required /><br />
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordOnChange} placeholder='Password' required /><br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                {error}
            </p>
        </div>
    );
};

export default ControlField;