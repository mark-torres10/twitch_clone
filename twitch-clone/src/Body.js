import React from 'react'; 
import Profile from './Profile';
import Stream from './Stream'; 
import './Body.css'; 

const Body = () => {
    return (
        <div className="body">
            <div className="body_left">
                <Stream />
                <Profile />
            </div>
            <div className="body_rightPlaceHolder">

            </div>
        </div>
    )
}

export default Body