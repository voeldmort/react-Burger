import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItmes from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar=(props)=>(
    <header className='Toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="70%" />
        <nav className='DesktopOnly'>
        <NavigationItmes />
        </nav>
    </header>

);




export default toolbar;