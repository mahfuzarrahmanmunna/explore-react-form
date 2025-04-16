import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';

const Grandpa = ({ assets }) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad assets={assets} />
                <Uncle />
                <Aunt />
            </section>
        </div>
    );
};

export default Grandpa;