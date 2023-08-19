import CustomButton from '../custom_button/CustomButton';
import './Footer.css';

import fbLogo from '../../res/svg/socials/fb-logo.svg'
import igLogo from '../../res/svg/socials/ig-logo.svg'
import linkedInLogo from '../../res/svg/socials/linked-in-logo.svg'
import twitterLogo from '../../res/svg/socials/twitter-logo.svg'
import ytLogo from '../../res/svg/socials/yt-logo.svg'

export default function Footer() {
    return (
        <div id='footer'>
            <div className='footer-part'>
                <div className='footer-part-container'>
                    <p>©2023Your Company</p>
                </div>
                <div className='footer-part-container'>
                    <CustomButton text="Purchase Now" />
                </div>
            </div>
            <div className='footer-part'>
                <div id='footer-ul-container' className='footer-part-container'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='footer-part-container'>
                    {
                        [fbLogo, igLogo, linkedInLogo, twitterLogo, ytLogo].map(imgSrc => (
                            <div className='social-logo-container'>
                                <img src={imgSrc} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}