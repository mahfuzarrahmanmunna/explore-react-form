import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" placeholder='Email' name="email" /><br />
                <input type="password" ref={passwordRef} name="password" placeholder='Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;