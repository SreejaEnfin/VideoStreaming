import React from 'react'
import '../css/main.css'
import './Home.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Home() {
    return (
        <div>
            <main className="br-home-content-wrapper">
                <div className="br-logo-wrapper text-center text-light">
                    <a href="home.html" className='titleClass'>
                        <h1>EnMeet</h1>
                    </a>
                </div>
                <h1 className="br-welcome-title">Let's connect through Technology</h1>
                        <Link className="btn br-btn-outline" to="/homeInvite"
                            >
                            START CONFERENCE
                        </Link>
            </main>
            <Footer/>
        </div>

    )
}

export default Home
