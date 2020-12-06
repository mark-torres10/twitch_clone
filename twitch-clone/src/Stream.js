import React from 'react'; 
import './Stream.css'; 

const Stream = () => {
    return (
        <div className="stream">
            <div className="stream_container">
                <div className="stream_status">
                    <div className="stream_statusContainer">
                        <div className="stream_statusContainerTop">
                            <div className="stream_statusIndicator">ONLINE</div>
                            <h2>Check out the below streams from YouTube</h2>
                        </div>
                        <div className="stream_statusInfo">
                            <i className="fas fa-bell"></i>
                            <p>You will be notified when YouTube is live</p>
                        </div>
                    </div>
                </div>
                <div className="stream_videoEmbed">
                    <iframe
                        width="500"
                        height="295"
                        src="https://www.youtube.com/embed/TTerxQRfcFc"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen={true}
                        ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Stream