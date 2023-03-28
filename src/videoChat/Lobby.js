import React from 'react';
import { useNavigate } from "react-router-dom";
import "./lobby.css"

function Lobby(){
    const navigate = useNavigate();
    function handleSubmit(e){
            e.preventDefault()
            window.location = `Meet.js`
            console.log('You clicked submit.');
    }
    return(
        <div>
            <body>
                <main id = "lobby-container">
                    <div id = "form-container">
                        <div id = "form__container__header">
                            <p>👋 Join the Room</p>
                        </div>
                        <div id = "form__content__wrapper">
                            {/* <form id="join-form" onSubmit={handleSubmit}>
                                <input type="text" name="invite_link" required/>
                                <input type="submit" value="Join Room" />
                            </form> */}
                            <div id = "join-form">
                                <button onClick={() => navigate("/Meet")}>Go to Video Chat</button>
                                <button onClick={() => navigate(-1)}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </div>
    )

}

export default Lobby;