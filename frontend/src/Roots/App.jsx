import React, {createContext, useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Components/AuthsComponents/Login.jsx";
import Chat from "../Components/HomeComponents/Dashboard/Chat.jsx";
import GroupChat from "../Components/HomeComponents/Dashboard/Group.jsx";
import "../Styles/Homes/General.css";
import { wsFactory } from "../../utils/chat";

export const wsContext = createContext(wsFactory())
export default function App(){
    return  <div className="component-root">
                <wsContext.Provider value={wsContext}>
                    <Router>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Login/>}/>
                                <Route path="chat/" element={<Chat/>}/>
                                <Route path="groupChat/" element={<GroupChat/>}/>
                            </Route>
                        </Routes>
                    </Router>
                </wsContext.Provider>
            </div>
}