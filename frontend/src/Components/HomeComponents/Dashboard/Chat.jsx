import React, {useState, useContext} from "react";
import { wsFactory } from "../../../../utils/chat";

export default function Chat(){
    const [currentUser, setCurrentUser] = useState(null)
    return (
        <div className="chat">
            {/* where user can chat with a friend */}
            Chat here
        </div>
    )
}