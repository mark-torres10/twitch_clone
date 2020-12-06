import React from 'react'; 
import './Profile.css'; 
import RecentItem from './RecentItem';

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile_topLeft">
                <img src="https://tse4.mm.bing.net/th?id=OIP.o_LVqn47XZe1uEg9W0J91QHaDt&pid=Api" alt="Avatar"/>
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

            <div className="profile_recent">
                <h2>Recent broadcasts</h2>
                <div className="profile_recentItems">
                    <RecentItem url={"https://youtube.com/embed/gLNIVdtaW3A"} title={"Let's Build Twitch Clone for Beginners with React"}/>
                    <RecentItem url={"https://youtube.com/embed/RDV3Z1KCBvo"} title={"Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"}/>
                    <RecentItem url={"https://youtube.com/embed/gg7WjuFs8F4"} title={"AlphaFold: The making of a scientific breakf"}/>
                </div>
            </div>

            <div className="profile_categories">
                <h2>YouTube's recently streamed Categories</h2>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"/>
                <h3>Science and Technology</h3>
            </div>
        </div>
    )
}

export default Profile