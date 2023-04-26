import React from 'react'
import video from '../img/dummy.webm'

function DeviceCheck() {
    return (
        <div>
            <header class="br-page-header row">
                <div class="br-logo-wrapper col-sm-7">
                    <a href="home.html" className='titleClass'>
                        <h1>EnMeet</h1>
                    </a>
                </div>
            </header>
            <main class="br-inner-page-content">
                <div class="br-device-checking-wrapper col-lg-10">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 d-flex flex-column justify-content-center">
                            <h1 class="br-welcome-title">Make Every<br/>Meeting Count.</h1>
                            <a class="br-link" href="conference-room.html"
                                style={
                                    {textDecoration: 'none'}
                            }>Start Meeting
                                <i class="fa fa-angle-double-right"></i>
                            </a>
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div class="br-device-checking-area">
                                {/* actually, it was a video tag */}
                                <video class="br-video" autoplay>
                                    <source src={video}/>
                                </video>

                                <div class="br-footer text-center">
                                    <a class="br-icon-no-video" href="javascript:;"></a>
                                    <a class="br-icon-no-audio active" href="javascript:;"></a>
                                    <a class="br-icon-ellipsis" href="#modalCheckDevice" data-toggle="modal"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="br-modal modal fade" id="modalCheckDevice">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title">CHECK YOUR DEVICE</h3>
                                <button class="br-icon-close close" type="button" data-dismiss="modal"></button>
                            </div>
                            <div class="modal-body">
                                <ul class="br-device-config-wrapper">
                                    <li class="br-device d-flex">
                                        <div class="br-icon br-icon-video"></div>
                                        <div class="br-device-dtls">
                                            <h4 class="br-title">Camera</h4>
                                            <select class="selectpicker" name="">
                                                <option>HP Webcame 1300 (03f0: e 107)</option>
                                                <option>HP Webcame 1300 (03f0: e 107)</option>
                                                <option>HP Webcame 1300 (03f0: e 107)</option>
                                            </select>
                                        </div>
                                        <div class="br-preview text-center">
                                            <video class="br-video" autoplay src="../img/dummy.webm"></video>
                                        </div>
                                    </li>
                                    <li class="br-device d-flex">
                                        <div class="br-icon br-icon-audio"></div>
                                        <div class="br-device-dtls">
                                            <h4 class="br-title">Microphone</h4>
                                            <select class="selectpicker" name="">
                                                <option>Default - Microphone (realtech H1 1)</option>
                                                <option>Default - Microphone (realtech H1 1)</option>
                                            </select>
                                        </div>
                                        <div class="br-preview text-center">
                                            <div class="br-icon-equalizer"></div>
                                        </div>
                                    </li>
                                    <li class="br-device d-flex">
                                        <div class="br-icon br-icon-speaker"></div>
                                        <div class="br-device-dtls">
                                            <h4 class="br-title">Speaker</h4>
                                            <select class="selectpicker" name="">
                                                <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                                <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                                <option>Default - Speaker (realtech H1 1realtech H1 1realtech H1 1)</option>
                                            </select>
                                        </div>
                                        <div class="br-preview text-center">
                                            <div class="br-icon-play"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="br-pagefooter">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="br-date-time-wrapper">
                            <div class="br-time-wrapper">
                                <span class="br-time">
                                    10:35
                                </span>
                                <span class="br-format">am</span>
                            </div>
                            <div class="br-date-wrapper">MON, 5 OCTOBER</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default DeviceCheck
