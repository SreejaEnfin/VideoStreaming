import React from 'react'

function HomeInvite() {
  return (
    <div>
        <main class="br-home-content-wrapper br-inner-home-content-wrapper">
      <div class="br-logo-wrapper text-center"><a href="home.html" className='titleClass'><h1>EnMeet</h1></a></div>
      <h1 class="br-welcome-title">Better meetings <br/>are just the beginning</h1>
      <div class="br-start-conference text-center">
        <h4 class="br-sub-title">What's your name?</h4>
        <form action="device-checking.html"><input class="br-input d-inline-block" type="text" placeholder="Your Name"/><button class="btn br-btn-outline" type="submit">START CONFERENCE</button></form>
      </div>
    </main>
    <footer class="br-pagefooter">
      <div class="row align-items-center">
        <div class="col-sm-6">
          <div class="br-date-time-wrapper">
            <div class="br-time-wrapper"><span class="br-time"> 10:35 </span><span class="br-format">am</span></div>
            <div class="br-date-wrapper">MON, 5 OCTOBER</div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default HomeInvite