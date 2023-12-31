import React from 'react';
import { Item } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navigation.style.scss'
import { FaAngleDown, FaReact } from 'react-icons/fa'
import { TbBrandTypescript } from 'react-icons/tb'


interface NavigationProps {
    items: Item[];
}

const Navigation = ({ items }: NavigationProps) => {

    const [isToggled, setIsToggled] = useState(true);
    const [closeSubMenu, setCloseSubMenu] = useState(false);

    const screenSizes = {
        small: 720
    }

    const toggleSubMenu = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.currentTarget.classList.toggle('navbar-container__menu-sub-menu--toggled');
    }

    const renderItems = () => items.map((item, index) => (
        <li key={index}>
            {item.url
                ? <Link to={item.url} onClick={() => closeMenu(true)}>
                    {item.name}
                </Link>
                : <div onClick={toggleSubMenu} className='navbar-container__menu-item'>
                    <span>
                        {item.name}
                        <FaAngleDown className='navbar-container__menu-arrow-icon' />
                    </span>
                    {item.children && renderChildren(item.children)}
                </div>
            }

        </li>

    ))

    const renderChildren = (children: Item[]) => (
        <ul className="navbar-container__menu-sub-menu navbar-container__menu-sub-menu--toggled">
            {children.map((child, index) => (
                <li key={index}>
                    <Link to={child.url!} onClick={() => closeMenu(true)}>
                        {child.name}
                    </Link>
                </li>
            ))}
        </ul>
    )

    const closeMenu = (closeSubMenu = false) => {
        setIsToggled(false);
        if (closeSubMenu && window.innerWidth > screenSizes.small) {
            setCloseSubMenu(true)
            setTimeout(() => setCloseSubMenu(false), 0)
        }
    }

    return (
        <nav className='main-navbar'>
            <div className="navbar-container">
                <div className="navbar-container__logo">
                    <FaReact /><span> + </span><TbBrandTypescript />
                </div>
                <div
                    className={`navbar-container__hamburger`}
                    onClick={() => setIsToggled(!isToggled)}
                >
                    <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-top`}></span>
                    <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-middle-1`}></span>
                    <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-middle-2`}></span>
                    <span className={`navbar-container__hamburger-burger-bar navbar-container__hamburger${isToggled ? '--close' : ''}-burger-bar-bottom`}></span>

                </div>
            </div>
            <ul className={['navbar-container__menu',
                isToggled && 'navbar-container__menu--active',
                closeSubMenu && 'navbar-container__menu-sub-menu--toggled',
            ]
                .filter(Boolean).join(' ')}
            >{renderItems()}</ul>
        </nav>
    )
}

export default Navigation