import React, {useState, useContext} from "react";
import { wsFactory } from "../../../../utils/chat";

export default function GroupChat(){
    const [connectedUsers, setConnectedUsers] = useState([])

    return (
        <div className="chat">
            {/* group chat */}
            Chat page for groups
        </div>
    )
}