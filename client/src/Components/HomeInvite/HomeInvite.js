import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

function HomeInvite() {
  return (
    <div>
        <main className="br-home-content-wrapper br-inner-home-content-wrapper">
      <div className="br-logo-wrapper text-center"><a href="home.html" className='titleClass'><h1>EnMeet</h1></a></div>
      <h1 className="br-welcome-title">Better meetings <br/>are just the beginning</h1>
      <div className="br-start-conference text-center">
        <h4 className="br-sub-title">What's your name?</h4>
        <form action="device-checking.html"><input className="br-input d-inline-block" type="text" placeholder="Your Name"/><Link className="btn br-btn-outline" to='/deviceCheck'>START CONFERENCE</Link></form>
      </div>
    </main>
   <Footer/>
    </div>
  )
}

export default HomeInvite