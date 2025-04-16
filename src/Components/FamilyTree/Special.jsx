import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ name, assets }) => {
    const newAsset = useContext(AssetContext)
    return (
        <div>
            <h3>Special : {name}</h3>
            <h4>{assets}</h4>
            <h5>{newAsset}</h5>
        </div>
    );
};

export default Special;