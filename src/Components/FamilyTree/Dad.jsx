import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({ assets }) => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <MySelf assets={assets} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Dad;