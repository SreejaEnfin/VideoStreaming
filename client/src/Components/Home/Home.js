import React from 'react'
import '../css/main.css'
import './Home.css'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import HomeInvite from '../HomeInvite/HomeInvite';

function Home() {
    return (
        <div>
            <main class="br-home-content-wrapper">
                <div class="br-logo-wrapper text-center text-light">
                    <a href="home.html" className='titleClass'>
                        <h1>EnMeet</h1>
                    </a>
                </div>
                <h1 class="br-welcome-title">Let's connect through Technology</h1>
                <Router>
                    <Routes>
                        <Link to="/homeinvite"
                            >
                            START CONFERENCE
                        </Link>
                    </Routes>
                </Router>
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

export default Home
