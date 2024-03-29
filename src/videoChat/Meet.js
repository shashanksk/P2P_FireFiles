import React from 'react';
import AgoraRTM from './agora-rtm-sdk-1.5.1.js'
import { useNavigate } from "react-router-dom";
import "./main.css"
import "./Lobby.js"

function Meet(){
    // const navigate = useNavigate();

    let APP_ID = "50f5192da9ea4f8fa089db17bf6c7a59"

    let token = null;
    let uid = String(Math.floor(Math.random() * 10000))

    let client;
    let channel;

    let roomId = 'meeting'

    let localStream;
    let remoteStream;
    let peerConnection;

    

    const servers = {
        iceServers:[
            {
                urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
            }
        ]
    }
    
    let constraints = {
        video:{
            width:{min:640, ideal:1920, max:1920},
            height:{min:480, ideal:1080, max:1080},
        },
        audio:true
    }
    
    let handleUserJoined = async (MemberId) => {
        console.log('A new user joined the channel:', MemberId)
        createOffer(MemberId)
    }
    
    // let createOffer = async (MemberId) => {
    let createOffer = async (MemberId) =>{
        await createPeerConnection(MemberId)
        

        let offer = await peerConnection.createOffer()
        await peerConnection.setLocalDescription(offer)
        // window.alert('hello')
        console.log('offer:',offer)
        // client.sendMessageToPeer({Text:'welp did this work'}) //deebug line
        client.sendMessageToPeer({text:JSON.stringify({'type':'offer', 'offer':offer})}, MemberId)
    }
    
    let createPeerConnection = async (MemberId) => {
        peerConnection = new RTCPeerConnection(servers)

        remoteStream = new MediaStream()
        document.getElementById('user-2').srcObject = remoteStream
        document.getElementById('user-2').style.display = 'block'

        document.getElementById('user-1').classList.add('smallFrame')

        if(!localStream){
            localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
            document.getElementById('user-1').srcObject = localStream
        }

        localStream.getTracks().forEach((track) => {
            peerConnection.addTrack(track, localStream)
        })

        peerConnection.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream.addTrack(track)
            })
        }

        peerConnection.onicecandidate = async (event) => {
            if(event.candidate){
                client.sendMessageToPeer({text:JSON.stringify({'type':'candidate', 'candidate':event.candidate})}, MemberId)
            }
        }
    }

    let handleUserLeft = (MemberId) => {
        document.getElementById('user-2').style.display = 'none'
        document.getElementById('user-1').classList.remove('smallFrame')

    }

    let handleMessageFromPeer = async (message, MemberId) => {
        message = JSON.parse(message.text)

        if(message.type === 'offer'){
            createAnswer(MemberId, message.offer)
        }

        if(message.type === 'answer'){
            addAnswer(message.answer)
        }

        if(message.type === 'candidate'){
            if(peerConnection){
                peerConnection.addIceCandidate(message.candidate)
            }
        }
    }

    let createAnswer = async (MemberId, offer) => {
        await createPeerConnection(MemberId)

        await peerConnection.setRemoteDescription(offer)

        let answer = await peerConnection.createAnswer()
        await peerConnection.setLocalDescription(answer)

        client.sendMessageToPeer({text:JSON.stringify({'type':'answer', 'answer':answer})}, MemberId)
    }

    let addAnswer = async (answer) => {
        if(!peerConnection.currentRemoteDescription){
            peerConnection.setRemoteDescription(answer)
        }
    }

    let init = async () => {
        client = await AgoraRTM.createInstance(APP_ID)
        await client.login({uid, token})
        
        // channel = client.createChannel(roomId)
        channel = client.createChannel('main')
        await channel.join()
        
        channel.on('MemberJoined', handleUserJoined)
        // channel.on('MemberLeft', handleUserLeft)

        client.on('MessageFromPeer', handleMessageFromPeer)

        // localStream = await navigator.mediaDevices.getUserMedia(constraints) // this is original
        localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
        
        document.getElementById('user-1').srcObject = localStream
        console.log("camera load succesfull")
        
    }


    let leaveChannel = async () => {
        await channel.leave()
        await client.logout()
    }

    let toggleCamera = async () => {
        let videoTrack = localStream.getTracks().find(track => track.kind === 'video')

        if(videoTrack.enabled){
            videoTrack.enabled = false
            document.getElementById('camera-btn').style.backgroundColor = 'rgb(255, 80, 80)'
        }else{
            videoTrack.enabled = true
            document.getElementById('camera-btn').style.backgroundColor = 'rgb(179, 102, 249, .9)'
        }
    }

    let toggleMic = async () => {
        let audioTrack = localStream.getTracks().find(track => track.kind === 'audio')

        if(audioTrack.enabled){
            audioTrack.enabled = false
            document.getElementById('mic-btn').style.backgroundColor = 'rgb(255, 80, 80)'
        }else{
            audioTrack.enabled = true
            document.getElementById('mic-btn').style.backgroundColor = 'rgb(179, 102, 249, .9)'
        }
    }

    
    // document.getElementById('camera-btn').addEventListener('click', toggleCamera)
    var el = document.getElementById('camera-btn');
    if(el){
        el.addEventListener('click',toggleCamera)
    }
    else{
        window.alert("agora camera connection failed")
    }
    // document.getElementById('mic-btn').addEventListener('click', toggleMic)  //issue was agora was not connecting soo the event listener was forever waiting
    var mic = document.getElementById('mic-btn');
    if(mic){
        mic.addEventListener('click',toggleMic)
    }
    else{
        window.alert("agora mic connection failed")
    }
    window.addEventListener('beforeunload', leaveChannel) 

    init()
    return(
        <div>
            <body>
            <div id="videos">
                <video className="video-player" id="user-1" autoPlay playsInline></video>
                <video className="video-player" id="user-2" autoPlay playsInline></video>
            </div>
            <p color = 'white'>Heyyyyyyyyyy</p>
            <div id = "controls">
                <div className= "control-container" id = "camera-btn">
                    <img src={require("./icons/camera.png")}  alt=''/>
                </div>
                <div className = "control-container" id = "mic-btn">
                    <img src={require("./icons/mic.png")} alt='' />
                </div>
                <a href="./Lobby">
                    <div className = "control-container" id = "leave-btn">
                        <img src={require("./icons/phone.png")} alt=''/>
                    </div>
                </a>
            </div>
            </body>        
        </div>
    )

}

export default Meet;