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
                <Channel avatar="https://tse3.mm.bing.net/th?id=OIP.EmARIhsztFrbS50fDL0e6QHaEA&pid=Api" name="MLB" followers = "21.03m"/>
                <Channel avatar="http://tellmenothing.com/wp-content/uploads/2017/05/Impractical_Jokers.jpg" name="Impractical Jokers" followers = "6.80m"/>
                <Channel avatar="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0xffffffff-no-rj-mo" name="freeCodeCamp.org" followers = "2.83m"/>
                <h5>RECOMMENDED CHANNELS</h5>
                <Channel avatar="https://tse4.mm.bing.net/th?id=OIP.hzvheNqpDxigxKJYrWLZrAHaCw&pid=Api" name="ESPN" followers="11.23m"/>
                <Channel avatar="https://tse3.mm.bing.net/th?id=OIP.1u4c5ccf1_LbWTZR-MrSlQHaEc&pid=Api" name="FOX Sports" followers="9.47m"/>

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