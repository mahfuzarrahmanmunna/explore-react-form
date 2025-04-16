import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HooksForm = () => {

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange] = useInputField('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted', name, email, password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={nameOnChange} defaultValue={name} placeholder='Name' /><br />
                <input type="email" name="email" onChange={emailOnChange} defaultValue={email} placeholder='Email' /><br />
                <input type="password" name="password" onChange={passwordOnChange} defaultValue={password} placeholder='Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;