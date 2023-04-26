import React from 'react'

function Message() {
    return (
        <div>
            <div class="br-chat-wrapper">
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
        </div>
    )
}

export default Message
