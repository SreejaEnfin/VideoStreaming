import React, {useEffect, useState} from 'react'
import ScreenOptions from '../ScreenOptions/ScreenOptions';

const ControlPanel = (props) => {
    const [screenOptions, setScreenOptions] = useState(false);
    const setInviteData = () => {
        props.onInviteChange();
    }

    const setScreenData = () => {
        props.onScreenChange();
    }

    const setMsgData = () => {
        props.onMsgChange();
    }

    return (
    <div className="br-control-panel">
        <ul className="br-control-list list-inline">
            <li>
                <a data-target="#message" data-toggle="action">
                    <i className="br-icon br-ctrl-icon-msg"
                        onClick={setMsgData}></i>
                </a>
            </li>
            <li>
                <a data-target="#screen" data-toggle="action">
                    <i className="br-icon br-ctrl-icon-monitor"
                        onClick={setScreenData}></i>
                </a>
            </li>
            <li>
                <a data-target="#invite" data-toggle="action">
                    <i className="br-icon br-ctrl-icon-usr"
                        onClick={setInviteData}></i>
                </a>
            </li>
            <li className="br-ctrl-call no-hover">
                <a data-target="#call" data-toggle="action">
                    <i className="br-icon br-ctrl-icon-cal"></i>
                </a>
            </li>
            <li>
                <a>
                    <i className="br-icon br-ctrl-icon-vdo"></i>
                </a>
            </li>
            <li className="active">
                <a>
                    <i className="br-icon br-ctrl-icon-mic"></i>
                </a>
            </li>
            <li className="dropup" data-toggle="dropdown">
                <a>
                    <i className="br-icon br-ctrl-icon-more" onClick={()=>setScreenOptions(!screenOptions)}></i>
                </a>
                {screenOptions && <ScreenOptions/>}
            </li>
        </ul>
    </div>
    )
    }
    
    export default ControlPanel
