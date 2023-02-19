import React from 'react'
import './Components/Footer.css'

function Footer(){
    return(
        <div class="parent">
            <div class="waves-footer">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>

            <div class="site-footer">

                <div style={{display:"flex"}}>
                    <div>
                            <h6>About</h6>
                            <div class = "children" >
                            <p style={{color:'black'}} class="text-justify">File transfer is a very essential part of the internet landscape. The aim of this project is to introduce mentees to networking and socket programming by making them explore the peer to peer model of file transfer as opposed to the traditional client-server model.</p>
                            </div>
                    </div>
                    <div class = "children" >
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="https://github.com/shashanksk/P2P_FireFiles">Git Hub</a></li>
                                <li><a href="https://ie.nitk.ac.in/">IE NITK</a></li>
                                <li><a href="https://www.nitk.ac.in/">NITK</a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer