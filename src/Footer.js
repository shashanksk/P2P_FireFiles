import React from 'react'
import './css/Footer.css'

function Footer(){
    let that;

    
        that = new RTCPeerConnection()
        console.log(that)
    
    return(


        <footer className="site-footer">
        <div style={{display:"flex"}}>
            <div>
                    <h6>About</h6>
                    <div className = "children" >
                    <p style={{color:'black'}} className="text-justify">File transfer is a very essential part of the internet landscape. The aim of this project is to introduce mentees to networking and socket programming by making them explore the peer to peer model of file transfer as opposed to the traditional client-server model.</p>
                    </div>
            </div>
            <div className = "children" >
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                        <li><a href="https://github.com/shashanksk/P2P_FireFiles">Git Hub</a></li>
                        <li><a href="https://ie.nitk.ac.in/">IE NITK</a></li>
                        <li><a href="https://www.nitk.ac.in/">NITK</a></li>
                    </ul>
            </div>
            
        </div>
        </footer>
    )
}

export default Footer