import React, {useState} from 'react'
import Home from './Components/Home/Home'
import HomeInvite from './Components/HomeInvite/HomeInvite'
import DeviceCheck from './Components/DeviceCheck/DeviceCheck'
import ConferenceRoom from './Components/ConferenceRoom/ConferenceRoom'
import {Routes, Route} from 'react-router-dom'

function App() {
    const [msg, setMsg] = useState(null)
    const [invite, setInvite] = useState(null)
    const [screen, setScreen] = useState(null)

    return (
        <>
            <Routes>
                <Route path='/'
                    element={<Home/>}/>
                <Route path='/homeInvite'
                    element={<HomeInvite/>}/>
                <Route path='/deviceCheck'
                    element={<DeviceCheck/>}/>
                <Route path='/conferenceRoom'
                    element={<ConferenceRoom setScreen={setScreen}/>}/>
            </Routes>
        </>

    )
}

export default App
