import React, {useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Components/AuthsComponents/Login.jsx";

export default function App(){
    return  <div className="component-root">
                <Router>
                    <Routes>
                        <Route element={<Login/>} index/>
                    </Routes>
                </Router>
            </div>
}