import React from 'react'
import video from '../img/dummy.webm'
import { useState } from 'react'

function ConferenceRoom() {
    const [msg, setMsg] = useState('false');
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
                <div class="br-conference-room-wrapper">
                    {/* <!--check css in video block scss--> */}
                    <div class="br-confernce-user-lists">
                        <div class="br-user-wrapper">
                            <div class="br-title">John Doe</div>
                            <div class="br-overlay-wrapper active">
                                <a class="br-icon br-ctrl-icon-no-video" href="javascript:;"></a>
                            </div>
                            <div class="br-video-wrapper">
                                <video class="br-video" autoplay>
                                    <source src={video}></source>
                                </video>
                            </div>
                        </div>
                        <div class="br-user-wrapper">
                            <div class="br-video-wrapper">
                                <div class="br-title">John Doe</div>
                                <div class="br-tools">
                                    <a class="br-icon br-ctrl-icon-no-video" href="javascript:;"></a>
                                    <a class="br-icon br-ctrl-icon-no-audio" href="javascript:;"></a>
                                </div>
                                <video class="br-video" autoplay>
                                    <source src={video}></source>
                                </video>
                            </div>
                        </div>
                        <div class="br-user-wrapper">
                            <div class="br-video-wrapper">
                                <div class="br-title">John Doe</div>
                                <div class="br-tools">
                                    <a class="br-icon br-ctrl-icon-no-video" href="javascript:;"></a>
                                    <a class="br-icon br-ctrl-icon-no-audio" href="javascript:;"></a>
                                </div>
                                <video class="br-video" autoplay>
                                    <source src={video}></source>
                                </video>
                            </div>
                        </div>
                        <div class="br-user-wrapper">
                            <div class="br-video-wrapper">
                                <div class="br-title">John Doe</div>
                                <div class="br-tools">
                                    <a class="br-icon br-ctrl-icon-no-video" href="javascript:;"></a>
                                    <a class="br-icon br-ctrl-icon-no-audio" href="javascript:;"></a>
                                </div>
                                <video class="br-video" autoplay>
                                    <source src={video}></source>
                                </video>
                            </div>
                        </div>
                    </div>
                    <div class="br-screen-share-wrapper" id="screen">
                        <video class="br-screen" autoplay>
                            <source src={video}></source>
                        </video>
                    </div>
                    <div class="br-control-panel">
                        <ul class="br-control-list list-inline">
                            <li>
                                {/* <a href="javascript:;" data-target="#message" data-toggle="action">
                                    <i class="br-icon br-ctrl-icon-msg" onClick={()=>setMsg(true)}></i>
                                </a> */}
                                 <i class="br-icon br-ctrl-icon-msg" onClick={()=>setMsg('true')}></i>
                            </li>
                            <li>
                                <a href="javascript:;" data-target="#screen" data-toggle="action">
                                    <i class="br-icon br-ctrl-icon-monitor"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" data-target="#invite" data-toggle="action">
                                    <i class="br-icon br-ctrl-icon-usr"></i>
                                </a>
                            </li>
                            <li class="br-ctrl-call no-hover">
                                <a href="javascript:;" data-target="#call" data-toggle="action">
                                    <i class="br-icon br-ctrl-icon-cal"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="br-icon br-ctrl-icon-vdo"></i>
                                </a>
                            </li>
                            <li class="active">
                                <a href="javascript:;">
                                    <i class="br-icon br-ctrl-icon-mic"></i>
                                </a>
                            </li>
                            <li class="dropup" data-toggle="dropdown">
                                <a href="javascript:;">
                                    <i class="br-icon br-ctrl-icon-more"></i>
                                </a>
                                <ul class="dropdown-menu br-drop-up">
                                    <li class="no-hover">
                                        <a href="javascript:;">
                                            <i class="br-icon br-full-screen"></i>
                                            <span>Full ccreen</span>
                                        </a>
                                    </li>
                                    <li class="no-hover">
                                        <a href="javascript:;">
                                            <i class="br-icon br-settings"></i>
                                            <span>Settings</span>
                                        </a>
                                    </li>
                                    <li class="no-hover">
                                        <a href="javascript:;">
                                            <i class="br-icon br-info"></i>
                                            <span>Help</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="br-invite-user-wrapper" id="invite">
                    <form class="br-form form-inline flex-nowrap" action="#">
                        <input class="form-control" type="text" value="https://www.abced.com/inviite.php?sadad"/>
                        <button class="btn br-btn-copy" type="submit">Copy</button>
                    </form>
                </div>
              
                <div class="br-chat-wrapper" id="message">
                    <div class="br-chat-inner-wrapper">
                        <h3 class="br-title">Chat</h3>
                        <div class="br-icon-close"></div>
                        <ul class="br-msg-list no-style">
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/8260117875_5ab9373bce_o.jpg?resize=600%2C401&amp;ssl=1"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://briansmith.com/wp-content/uploads/2013/01/celebrity-portrait-photography.jpg"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">Aprila</h5>
                                    <div class="br-msg">It is a long established fact that a reader will be distracted by the readable content of a page</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                            <li>
                                <figure class="br-avatar">
                                    <img src="https://phototalestudio.com/wp-content/uploads/2017/05/gainesville-portrait-photography-girls-and-planes7-1024x683.jpg"/></figure>
                                <div class="br-message-dtls">
                                    <h5 class="br-name">John Doe</h5>
                                    <div class="br-msg">OK</div>
                                </div>
                            </li>
                        </ul>
                        <div class="br-submit-msg">
                            <textarea class="form-control" placeholder="Type your message here"></textarea>
                            <button class="btn br-btn">Send</button>
                        </div>
                    </div>
                </div> 
            </main>
        </div>
    )
}

export default ConferenceRoom
