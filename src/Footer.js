import React from 'react'
import './Footer.css'

function Footer(){
    return(
        <footer class="site-footer">
        <div style={{display:"flex"}}>
            <div>
                    <h6>About</h6>
                    <div class = "children" >
                    <p style={{color:'white'}} class="text-justify">File transfer is a very essential part of the internet landscape. The aim of this project is to introduce mentees to networking and socket programming by making them explore the peer to peer model of file transfer as opposed to the traditional client-server model.</p>
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
        </footer>
    )
}

export default Footer