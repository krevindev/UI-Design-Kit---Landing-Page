import './Header.css';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import useWindowSize from '../../hooks/useWindowSize';
import { useRef, useState } from 'react';
import CustomButton from '../custom_button/CustomButton';

import xBtn from '../../res/svg/icons/exit-icon.svg';
import navBtn from '../../res/svg/icons/nav-btn-icon.svg';

export default function Header() {

    const isMobile = useWindowSize().width <= 500;
    const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

    const navlinksData = [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Contact' },
    ];

    return (
        <div id="header" className={isMobile && 'mobile'}>
            {
                !isMobile ? <>
                    <div id='header-nav-container' className='header-part'>
                        <ul>
                            {
                                navlinksData.map(link => <Navlink name={link.name} />)
                            }
                        </ul>
                    </div>
                    <div id='header-btn-container' className='header-part'>
                        <CustomButton type='default' text='Buy Now' />
                    </div>
                </> :
                    <div id='header-nav-btn-container'>
                        <img src={isMobileNavbarVisible ? xBtn : navBtn} onClick={() => setIsMobileNavbarVisible(prev => !prev)} />
                    </div>
            }

            {
                isMobile && <div
                    id='mobile-navbar-container'
                    className={isMobileNavbarVisible ? 'in' : 'out'}
                    onClick={e => { if (e.target.id == 'mobile-navbar-container') setIsMobileNavbarVisible(false) }}
                >
                    <div id='mobile-navbar' >
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}
const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function Navlink({ name, href }) {

    return (
        <li className='navlink' onClick={handleClick}>{name}</li>
    )
}