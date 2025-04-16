import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({ name }) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "tom mry" && <Special />
            }
            {
                name === 'tom chary' && <Friend />
            }
        </div>
    );
};

export default Cousin;