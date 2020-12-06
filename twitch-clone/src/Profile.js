import React from 'react'; 
import './Profile.css'; 

const Profile = () => {
    return (
        <div className="Profile">
            <div className="profile_topLeft">
                <img src="https://tse4.mm.bing.net/th?id=OIP.o_LVqn47XZe1uEg9W0J91QHaDt&pid=Api"/>
                <div className="profile_topLeftDetails">
                    <h1>YouTube</h1>
                    <h3>43.02M followers</h3>
                </div>
            </div>
            <div className="profile_topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="profile_menu">
                <h2 className="active">Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>
            </div>
        </div>
    )
}

export default Profile