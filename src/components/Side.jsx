import { useState } from 'react';
import Menu from './Menu';
import logo from '../assets/images/logo.png';
import Menu_Item from './Menu-Item';
import Home from '../assets/images/Home.png';
import Today from '../assets/images/Today.png';
import Archive from '../assets/images/Archive.png';
import Settings from '../assets/images/Settings.png';


const Side = () => {
    return (
        <div className="side-bar">
            <img src={logo} alt="logo" />
            <h1 className="title">MAGIScribe</h1>
            <p>ADNU Attendance Management System</p>
            {/* <Menu/> */}
            <div className="menu-bar">
                <Menu_Item image = {Home} label={"Home"}/>
                <Menu_Item image = {Today} label={"Calendar"}/>
            </div>

            <div className="down-options">
                <Menu_Item image = {Archive} label = "Archived"/>
                <Menu_Item image = {Settings} label = "Settings"/>
            </div>

        </div>
    )
}

export default Side;