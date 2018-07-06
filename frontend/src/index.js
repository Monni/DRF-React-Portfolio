import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Main";
import "./index.css";
import "./bootstrap/css/bootstrap.min.css";
import "./css/magnific-popup.css";
import "./css/vertical.min.css";
import "./css/template.css";

ReactDOM.render((
    <HashRouter>
        <Main/>
    </HashRouter>
    ), document.getElementById("root")
);
