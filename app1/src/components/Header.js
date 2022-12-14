import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    //views
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link to = '/home' classclassName="navbar-brand">LMS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                <Link to = '/signup' className="nav-link" aria-current="page">SignUp</Link>
                </li>
                <li className="nav-item">
                <Link to = '/signin' className="nav-link" aria-current="page">SignIn</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
    //render
    return (
        <header id='header'>
            {showNavigation()}
        </header>
    );
};

export default Header;
