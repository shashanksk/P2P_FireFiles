import React from 'react'
import './css/ContentBox.css'

function ContentBox(){

    let that;

    let init = async() => {
        that = new RTCPeerConnection()
        console.log(that)
    }

    return(
        <div>
            <div className='dropBox'>
                
            </div>
        </div>
    )
}

export default ContentBox