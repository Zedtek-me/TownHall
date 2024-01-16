import React, {useState, useContext} from "react";
import { wsContext } from "../../../Roots/App.jsx";


export default function Chat(){
    const [localUser, setLocalUser] = useState(null)
    const [remoteUser, setRemoteUser] = useState(null)
    const [messages, setMessages] = useState([])
    const ws = useContext(wsContext)
    const dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Use 24-hour format
      };

    return (
        <div className="chat">
            <div className="navigateBackArrow">
                <p id="friend-username">Friend Username</p>
            </div>
            <div className="profilePicAndName">
                <img src="" alt="friend profile pic" />
                <h3 id="friend-username">Friend Username</h3>
            </div>

            {/* local and remote chat */}
            <div className="local-and-remote-chat">
                {
                    
                }
                <h4 id="chat-timestamp">{`${new Date().toLocaleString("UTC", dateOptions).replace(" at", ",")}`}</h4>
                <div className="remote-chat">Remote chat container</div>
                <div className="local-chat">Local chat container</div>
                {/* NOTE:
                    These 3 elements will have to be re-created every new day 
                    when the user starts a chat (on the condition that the date of the `currentTimeS` !== today's date. All chats will be appended to the last of these containers) 
                */}
            </div>
        </div>
    )
}