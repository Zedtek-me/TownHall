import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const element = document.querySelector(".domRoot")
const root = ReactDOM.createRoot(element)
root.render(<App/>)
