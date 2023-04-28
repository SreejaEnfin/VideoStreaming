import React, { useEffect } from 'react'
import video from '../img/dummy.webm'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import UsersList from '../UsersList/UsersList'
import ScreenShareUser from '../ScreenShareUser/ScreenShareUser'
import ControlPanel from '../ControlPanel/ControlPanel';
import Invite from '../Invite/Invite';
import Message from '../Message/Message';

function ConferenceRoom() {
    const [msg, setMsg] = useState(false);
    const [screen, setScreen] = useState(false);
    const [invite, setInvite] = useState(false);
    const handleInviteChange = () =>{
        setInvite(!invite);
    }
    const handleMsgChange = () =>{
        setMsg(!msg);
    }
    const handleScreenChange = () =>{
        setScreen(!screen);
    }

    return (
        <div>
            <Header/>
            <main className="br-inner-page-content">
                <div className="br-conference-room-wrapper">
                    {/* <!--check css in video block scss--> */}
                    {
                    !screen && <UsersList/>
                }
                    {
                    screen && <ScreenShareUser/>
                }

                    <ControlPanel screen={screen} invite={invite} msg={msg} onMsgChange={handleMsgChange} onInviteChange={handleInviteChange} onScreenChange={handleScreenChange}/>
                </div>
                {
                invite && <Invite/>
            }

                {
                msg && <Message/>
            } </main>
            <Footer/>
        </div>
    )
}

export default ConferenceRoom
