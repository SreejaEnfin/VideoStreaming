import React, { useState } from 'react'
import '../css/main.css'

export const DeviceSelect = (props) => {
    const [showModal, setShowModal] = useState(true);
    return (
        <>
        <div className={showModal ? "br-modal modal fade show" : ''} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">CHECK YOUR DEVICE</h3>
                        <button className="br-icon-close close" onClick={()=>{
                            setShowModal(!showModal);
                            props.changeDeviceSelect();
                        }} type="button" data-dismiss="modal"></button>
                    </div>
                    <div className="modal-body ">
                        <ul className="br-device-config-wrapper">
                            <li className="br-device d-flex">
                                <div className="br-icon br-icon-video"></div>
                                <div className="br-device-dtls">
                                    <h4 className="br-title">Camera</h4>
                                    <select className="selectpicker" name="">
                                        <option>HP Webcame 1300 (03f0: e 107)</option>
                                        <option>HP Webcame 1300 (03f0: e 107)</option>
                                        <option>HP Webcame 1300 (03f0: e 107)</option>
                                    </select>
                                </div>
                                <div className="br-preview text-center">
                                    <video className="br-video" autoPlay src="../img/dummy.webm"></video>
                                </div>
                            </li>
                            <li className="br-device d-flex">
                                <div className="br-icon br-icon-audio"></div>
                                <div className="br-device-dtls">
                                    <h4 className="br-title">Microphone</h4>
                                    <select className="selectpicker" name="">
                                        <option>Default - Microphone (realtech H1 1)</option>
                                        <option>Default - Microphone (realtech H1 1)</option>
                                    </select>
                                </div>
                                <div className="br-preview text-center">
                                    <div className="br-icon-equalizer"></div>
                                </div>
                            </li>
                            <li className="br-device d-flex">
                                <div className="br-icon br-icon-speaker"></div>
                                <div className="br-device-dtls">
                                    <h4 className="br-title">Speaker</h4>
                                    <select className="selectpicker" name="">
                                        <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                        <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                        <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                    </select>
                                </div>
                                <div className="br-preview text-center">
                                    <div className="br-icon-play"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {showModal && <div className='modal-backdrop fade show'></div>}
        </>
    )

}
