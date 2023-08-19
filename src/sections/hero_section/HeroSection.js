import CustomButton from '../../components/custom_button/CustomButton';
import './HeroSection.css';

import heroImg from '../../res/svg/hero-img.svg';
import path1 from '../../res/svg/path1.svg';

export default function HeroSection() {
    return (
        <div id="hero-section">

            <div id='hero-text-container' className='hero-section-part' >
                <div id='hero-text-content'>
                    <h1 className="fade-in" >Introduce Your Product Quickly & Effectively</h1>
                    <p className="fade-in">Introduce your product swiftly and effectively with our UI design kit. Elevate your presentation using meticulously crafted elements that captivate and engage, ensuring a lasting impression on your audience.</p>
                    <div id='hero-btns-container' className='fade-in'>
                        <CustomButton type='default' text='Purchase UI Kit' />
                        <CustomButton type='border' text='Learn More' />
                    </div>
                </div>
            </div>
            <div id='hero-img-container' className='hero-section-part'>
                <img id='hero-path1-img' src={path1} />
                <img id='hero-main-img' className='fade-in' src={heroImg} />
            </div>
        </div>
    )
}