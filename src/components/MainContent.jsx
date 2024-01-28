import { useState } from 'react';
import NavigationBar from './NavigationBar';
import Classrooms from './Classrooms';
import Notifications from './Notifications';
import Requests from './Requests';

const MainContent = () => {
    return (
        <div className="main-content">
            <NavigationBar/>
            <div className="content">
                <Classrooms/>
                <div className="side-area">
                    <Notifications/>
                    <Requests/>
                </div>
            </div>
            
        </div>
    )
}

export default MainContent;