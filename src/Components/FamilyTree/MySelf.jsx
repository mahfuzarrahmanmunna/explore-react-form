import React from 'react';
import Special from './Special';

const MySelf = ({ assets }) => {
    return (
        <div>
            <h3>My Self</h3>
            <section>
                <Special assets={assets} />
            </section>
        </div>
    );
};

export default MySelf;