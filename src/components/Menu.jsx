import { useState } from 'react';
// import logo from '../assets/images/logo.png';
import Home from '../assets/images/Home.png';
import Today from '../assets/images/Today.png';
import Menu_Item from './Menu-Item';

const Menu = () => {
    return (
        <div className="menu-bar">
            <Menu_Item image = {Home} label={"Home"}/>
            <Menu_Item image = {Today} label={"Calendar"}/>

        </div>
        // <h1>This is the Side</h1>
    )
}

export default Menu;