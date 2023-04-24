import React from 'react';
import Logo from '../images/trollface.png';

export default function Navbar(){
    return(
        <div className="navbar">

            <div className='logo'>
                <img src={Logo} alt="troll-face" id="troll" />
                <h1>Meme Generator</h1>
            </div>
            
            <div className='project--part'>
                <p id="project-number">React Course- Project 3</p>
            </div>
        </div>
    )
}