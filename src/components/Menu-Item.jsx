import { useState } from 'react';
// import logo from '../assets/images/logo.png';
import Home from '../assets/images/Home.png';
import Today from '../assets/images/Today.png';

const Menu_Item = (props) => {
    const {image, label} = props;
    return (
            <div className="option">
                <h5>
                    <img src={image} alt={label} />
                    {label}
                </h5>
            </div>
        // <h1>This is the Side</h1>
    )
}

export default Menu_Item;