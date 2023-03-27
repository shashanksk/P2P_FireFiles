import React from 'react';
import { useNavigate } from "react-router-dom";
import "./lobby.css"

function Lobby(){
    const navigate = useNavigate();
    // let form = document.getElementById('join-form')

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     let inviteCode = e.target.invite_link.value
    //     window.location = `meet.html?room=${inviteCode}`
    // })
    function handleSubmit(e){
            e.preventDefault()
            let inviteCode = e.target.invite_link.value
            window.location = `meet.html?room=${inviteCode}`
            console.log('You clicked submit.');
    }
    return(
        <div>
            <body>
                <main id = "lobby-container">
                    <div id = "form-container">
                        <div id = "form__container__header">
                            <p>👋 Create OR Join a Room</p>
                        </div>
                        <div id = "form__content__wrapper">
                            <form id="join-form" onSubmit={handleSubmit}>
                            {/* <form id="join-form" > */}
                                <input type="text" name="invite_link" required/>
                                <input type="submit" value="Join Room" />
                                <button onClick={() => navigate(-1)}>Go Back</button>
                            </form>
                        </div>
                    </div>
                </main>
            </body>
            {/* <script>
                let form = document.getElementById('join-form')

                form.addEventListener('submit', (e) => {
                    e.preventDefault()
                    let inviteCode = e.target.invite_link.value
                    window.location = `meet.html?room=${inviteCode}`
                })
            </script> */}
        </div>
    )

}

export default Lobby;