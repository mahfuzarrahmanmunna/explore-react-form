import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <MySelf />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;