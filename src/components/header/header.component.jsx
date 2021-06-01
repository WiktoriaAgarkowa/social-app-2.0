import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src={Logo} alt="logo" className='logo'/>
        </Link>
        <div className='menu'>
            <Link className='menu-item' to='profile'>
                PROFILE
            </Link>
            <Link className='menu-item' to='login'>
                LOG IN
            </Link>
            <Link className='menu-item' to='/signup'>
                SIGN UP
            </Link>
        </div>
    </div>
)

export default Header;