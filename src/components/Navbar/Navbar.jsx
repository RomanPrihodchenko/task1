import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/home" className="btn btn-primary btn-lg btn-block" role="button">Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/addingpost" className="btn btn-primary btn-lg btn-block" role="button">New post</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/login" className="btn btn-primary btn-lg btn-block" role="button">Login</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;