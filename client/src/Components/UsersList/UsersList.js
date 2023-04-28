import React from 'react'
import video from '../img/dummy.webm'
import '../css/main.css';

const UsersList = () => {
    return (
        <div className={"br-confernce-user-lists"}>
            <div className="br-user-wrapper">
                <div className="br-title">John Doe</div>
                <div className="br-overlay-wrapper active">
                    <a className="br-icon br-ctrl-icon-no-video"></a>
                </div>
                <div className="br-video-wrapper">
                    <video className="br-video" autoPlay>
                        <source src={video}></source>
                    </video>
                </div>
            </div>
            <div className="br-user-wrapper">
                <div className="br-video-wrapper">
                    <div className="br-title">John Doe</div>
                    <div className="br-tools">
                        <a className="br-icon br-ctrl-icon-no-video"></a>
                        <a className="br-icon br-ctrl-icon-no-audio"></a>
                    </div>
                    <video className="br-video" autoPlay>
                        <source src={video}></source>
                    </video>
                </div>
            </div>
            <div className="br-user-wrapper">
                <div className="br-video-wrapper">
                    <div className="br-title">John Doe</div>
                    <div className="br-tools">
                        <a className="br-icon br-ctrl-icon-no-video"></a>
                        <a className="br-icon br-ctrl-icon-no-audio"></a>
                    </div>
                    <video className="br-video" autoPlay>
                        <source src={video}></source>
                    </video>
                </div>
            </div>
            <div className="br-user-wrapper">
                <div className="br-video-wrapper">
                    <div className="br-title">John Doe</div>
                    <div className="br-tools">
                        <a className="br-icon br-ctrl-icon-no-video"></a>
                        <a className="br-icon br-ctrl-icon-no-audio"></a>
                    </div>
                    <video className="br-video" autoPlay>
                        <source src={video}></source>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default UsersList
