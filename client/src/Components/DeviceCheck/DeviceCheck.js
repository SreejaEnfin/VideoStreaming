import React, {useState} from 'react'
import video from '../img/dummy.webm'
import {Link} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {DeviceSelect} from '../DeviceSelect/DeviceSelect'
import '../css/main.css'

function DeviceCheck() {
    const [deviceSelect, setDeviceSelect] = useState(false);
   const changeDeviceSelect = () =>{
    setDeviceSelect(!deviceSelect);
   }
//  console.log(deviceSelect);
    return (
        <div>
            <Header/>
            <main className="br-inner-page-content">
                <div className="br-device-checking-wrapper col-lg-10">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 d-flex flex-column justify-content-center">
                            <h1 className="br-welcome-title">Make Every<br/>Meeting Count.</h1>
                            <Link to='/conferenceRoom' className="br-link"
                                style={
                                    {textDecoration: 'none'}
                            }>Start Meeting
                                <i className="fa fa-angle-double-right"></i>
                            </Link>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="br-device-checking-area">
                                {/* actually, it was a video tag */}
                                <video className="br-video" autoPlay>
                                    <source src={video}/>
                                </video>

                                <div className="br-footer text-center">
                                    <i className="br-icon-no-video"></i>
                                    <i className="br-icon-no-audio active"></i>
                                    <i className="br-icon-ellipsis" 
                                        onClick={
                                            () => {setDeviceSelect(true)
                                            }
                                    }></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                deviceSelect && <DeviceSelect changeDeviceSelect={changeDeviceSelect}/>
            } </main>
            <Footer/>
        </div>
    )
}

export default DeviceCheck
