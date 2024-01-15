import React, {createContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Components/AuthsComponents/Login.jsx";

export default function App(){
    return  <div className="component-root">
                <Router>
                    <Routes>
                        <Route path="/">
                            <Route index element={<Login/>}/>
                            <Route path="test/" element={<p>test view</p>}/>
                        </Route>
                    </Routes>
                </Router>
            </div>
}