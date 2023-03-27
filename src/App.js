import React from 'react';
import { useNavigate } from "react-router-dom";
import "./css/App.css"

function App(){
  const navigate = useNavigate();
  const peer = new RTCPeerConnection({ 
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      { urls: "stun:stun.stunprotocol.org:3478" }
    ] 
  });

  class Channel{
    static BINARY_TYPE_CHANNEL = "arraybuffer";
    #peerConnection;
    #channel;

    constructor(){
      this.#peerConnection = new RTCPeerConnection(); // config was removed
      this.#channel = this.#peerConnection.createDataChannel(channelLabel);
      this.#channel.binaryType = Channel.BYNARY_TYPE_CHANNEL;

    }
  }
  const channelLabel = 'Test Channel';

  const onDataChannelCallback = (event) => {
    const { channel } = event;
   
    let receivedBuffer = [];
    let totalBytesFileBuffer = 0;
    let totalBytesArrayBuffers = 0;
   
    channel.onmessage = (event) => {
     const { data } = event;
  
    };
  };

  const BYNARY_TYPE_CHANNEL = "arraybuffer";
  const MAXIMUM_SIZE_DATA_TO_SEND = 65535;
  const BUFFER_THRESHOLD = 65535;
  const LAST_DATA_OF_FILE = "LDOF7";


  return(

    <div>
      <h1>Home Page</h1>
      <hr />

      {/* Button */}
      <p color='white'>
        <button onClick={() => navigate("/lobby")}>Go to Video Chat</button>
      </p>
      
      {/* For the button for file sharing */}
      {/* <p color='white'>
        <button onClick={() => navigate("/fileshare")}>Go to File Share</button>
      </p> */}

      {/* <div className='mainBox'>
        <div className='send'>
        </div>
              
        <div className='recieve'>
        </div>
        
        
      </div>   */}
    </div>
  )

}

export default App;
