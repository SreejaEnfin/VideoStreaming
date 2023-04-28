import React, { useState } from 'react'

const ScreenOptions = () => {
    const [showOp, setShow] = useState(true)
    return (
        <ul className={showOp ? "dropdown-menu br-drop-up show" : 'dropdown-menu br-drop-up'}>
            <li className="no-hover">
                <a>
                    <i className="br-icon br-full-screen" onClick={()=>setShow(false)}></i>
                    <span onClick={()=>setShow(false)}>Full ccreen</span>
                </a>
            </li>
            <li className="no-hover">
                <a>
                    <i className="br-icon br-settings" onClick={()=>setShow(false)}></i>
                    <span onClick={()=>setShow(false)}>Settings</span>
                </a>
            </li>
            <li className="no-hover">
                <a>
                    <i className="br-icon br-info" onClick={()=>setShow(false)}></i>
                    <span onClick={()=>setShow(false)}>Help</span>
                </a>
            </li>
        </ul>
    )
}

export default ScreenOptions
