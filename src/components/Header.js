import React from "react";
import trollFace from "../images/Troll-Face.svg";

export default function Header() {
    return (
        <header className="header">
            <img src={trollFace} alt="Troll Face" className="header-image" />
            <h1 className="header-title">Meme Generator</h1>
            <h3 className="header-project">React Project</h3>
        </header>
    );
}