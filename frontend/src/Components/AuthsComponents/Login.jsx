import React, {useState} from "react"
import { Link } from "react-router-dom"

export default function Login(){
    return (
        <div className="login">
            Login component
            <Link to="chat">Chat page</Link>
            <Link to="groupChat">Group Chat page</Link>
        </div>
    )
}