import React from 'react'; 
import './RecentItem.css'; 

const RecentItem = (props) => {
    return (
        <div className="item">
            <iframe
                width="400"
                height="235"
                src={props.url}
                frameborders="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}></iframe>
            <div className="item_details">                
                <img src="https://tse4.mm.bing.net/th?id=OIP.o_LVqn47XZe1uEg9W0J91QHaDt&pid=Api" alt="logo" />
                <div className="item_detailsText">
                    <h4>{props.title}</h4>
                    <p>YouTube</p>
                    <p>Media</p>
                </div>

            </div>
        </div>
    )
}

export default RecentItem