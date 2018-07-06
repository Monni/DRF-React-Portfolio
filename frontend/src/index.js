import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Main from "./Main";
import "./index.css";
import "./bootstrap/css/bootstrap.min.css";
import "./css/template.css";
import "./css/typography.css";

ReactDOM.render((
    <HashRouter>
        <Main/>
    </HashRouter>
    ), document.getElementById("root")
);
