import React from 'react'

const Message = () => {
    return (
        <div className="br-chat-wrapper active">
            <div className="br-chat-inner-wrapper">
                <h3 className="br-title">Chat</h3>
                <div className="br-icon-close"></div>
                <ul className="br-msg-list no-style">
                    <li>
                        <figure className="br-avatar">
                            <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/8260117875_5ab9373bce_o.jpg?resize=600%2C401&amp;ssl=1"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://briansmith.com/wp-content/uploads/2013/01/celebrity-portrait-photography.jpg"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">Aprila</h5>
                            <div className="br-msg">It is a long established fact that a reader will be distracted by the readable content of a page</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/960/public/briancolor.jpg?itok=ZVR85Ekm"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                    <li>
                        <figure className="br-avatar">
                            <img src="https://phototalestudio.com/wp-content/uploads/2017/05/gainesville-portrait-photography-girls-and-planes7-1024x683.jpg"/></figure>
                        <div className="br-message-dtls">
                            <h5 className="br-name">John Doe</h5>
                            <div className="br-msg">OK</div>
                        </div>
                    </li>
                </ul>
                <div className="br-submit-msg">
                    <textarea className="form-control" placeholder="Type your message here"></textarea>
                    <button className="btn br-btn">Send</button>
                </div>
            </div>
        </div>
    )
}

export default Message
