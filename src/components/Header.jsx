import React from 'react';
import { BsBuildingFill,BsList } from "react-icons/bs";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="nav_content">
                <a href="/"><span style={{fontSize: 20 +'px'}}>Build Your Home</span><BsBuildingFill /></a>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/findyourhomes">Homes</a></li>
                </ul>
                <div className="hamburger">
                <BsList />
                </div>
            </div>
        </nav>

    )
}

export default Header
