import React from 'react';

/**
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData.get('name of the input field')
 *  
 */

const FormAction = () => {
    const handleAction = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" placeholder='your name' id="" /><br />
                <input type="email" name="email" id="" placeholder='your mail' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;