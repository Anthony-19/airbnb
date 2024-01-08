import React from "react";
import NavLogo from "../images/airbnb-logo.png"

export default function Nabar() {
    return(
        <div className="nav">
            <img src={NavLogo} className="navBrand"/>
        </div>
    )
}