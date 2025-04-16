import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='your name' /> <br />
                <input type="email" placeholder='your email' name="email" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;