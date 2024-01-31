import React, {useState, useContext, useRef, useEffect} from "react";
import { wsContext } from "../../../Roots/App.jsx";
import { getMessages, getUser } from "../../../../utils/chat.js";

export default function Chat({remoteUserId}){
    const [localUser, setLocalUser] = useState(null)
    const [remoteUser, setRemoteUser] = useState(null)
    const [messages, setMessages] = useState([])
    const chatContainerRef = useRef(null)
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

    //display all our previous messages before appending the current ones based on our chats   
      useEffect(async ()=>{
        async function setMessages(){
            let messages = await getMessages("chat", remoteUser.id, localUser.id)
            setMessages(messages || [])
            return
        }
        await setMessages()
        getUser(remoteUserId)
        .then((userData)=>setRemoteUser(userData))

      }, [remoteUserId])

    return (
        <div className="chat">
            <div className="navigateBackArrow">
                <p id="friend-username">Friend Username</p>
            </div>
            <div className="profilePicAndName">
                <img src="" alt="friend profile pic" />
                <h3 id="friend-username">Friend Username</h3>
            </div>

            {
                messages ? (
                    <div className="local-and-remote-chat" ref={chatContainerRef}>
                        {
                            messages.map((message)=>{
                                <div className="remote-and-local-scope">
                                    <div className="timestamp">{message.date_created}</div>
                                    <div className="local-chat">{message.by}</div>
                                    <div className="remote-chat">{message.from}</div>
                                </div>
                            })
                        }
                    </div>
                ) : (
                    <div className="local-and-remote-chat">

                    </div>
                )
            }
        </div>
    )
}