import React from 'react'
import logo from './assets/logo.svg';
import basket from './assets/basket.svg';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/"><img style={{ height: "20px" }} alt="Octopus Energy" src={logo} /></Link>
                <Link to="/cart"><img style={{ height: "20px" }} alt="shopping basket" src={basket} /></Link>
            </div>
        </header>
    )
}

export default Header
