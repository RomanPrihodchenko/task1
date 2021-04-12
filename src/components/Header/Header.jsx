import React from 'react';
import s from './Header.module.css';
import logotype from '../Images/logotype.jpg';

const Header = () => {
    return <header className = {s.header}>
        <img src={logotype} alt="logotype"></img>
    </header>
}

export default Header;