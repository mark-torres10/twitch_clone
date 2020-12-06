import React from 'react'; 
import './Channel.css';

const Channel = (props) => {
    return (
        <div className="channel">
            <div className="channel_details">
                <img src={props.avatar} alt="avatar"></img>
                <p>{props.name}</p>
            </div>
            <p><span className="dot"></span>{props.followers}</p>
        </div>
    )
}

export default Channel