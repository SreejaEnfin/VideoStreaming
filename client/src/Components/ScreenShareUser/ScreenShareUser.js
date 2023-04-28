import React from 'react'
import video from '../img/dummy.webm'


const ScreenShareUser = () => {
    return (
        <>
            <div className="br-screen-share-wrapper active">
                <video className="br-screen" autoPlay>
                    <source src={video}></source>
                </video>
            </div>
            <div className="br-confernce-user-lists right">
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
        </>

    )
}

export default ScreenShareUser
