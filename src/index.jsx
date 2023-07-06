import React from "react"
import ReactDOM from "react-dom/client"
import "./style.min.css"
import Header from "./Header"
import Main from "./main"

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <Header />
    <Main />
  </>
)
