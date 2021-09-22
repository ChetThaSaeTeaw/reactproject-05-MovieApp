import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const profilePic = 'https://i.pinimg.com/originals/12/a2/e6/12a2e6ce6ef6df80c5e34b1fb4047649.png';
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">Moive App</div>
            </Link>
                <div className="user-image">
                    <img src={profilePic} alt="profilePic" />
                </div>
        </div>
    );
};

export default Header;