import React from 'react'; 
import Channel from './Channel';
import './Sidebar.css'; 

const Sidebar = () => {
    return (
        <div className = "sidebar">
            <div className="sidebar_top">
                <h5>FOLLOWED CHANNELS</h5>
                <Channel avatar="https://tse4.mm.bing.net/th?id=OIP.o_LVqn47XZe1uEg9W0J91QHaDt&pid=Api" name="YouTube" followers = "43.02m"/>
                <Channel avatar="https://tse4.mm.bing.net/th?id=OIP.YKXXJCW1d2e7FDMGKbCJ6gHaFj&pid=Api" name="nigahiga" followers = "15.74m"/>

                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar="https://tse4.mm.bing.net/th?id=OIP.hzvheNqpDxigxKJYrWLZrAHaCw&pid=Api" name="ESPN" followers="1.23m"/>

                <p className="sidebar_topShowMore">Show More</p>
            </div>
            <div className="sidebar_bottom">
                <div className="sidebar_bottomContainer">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar