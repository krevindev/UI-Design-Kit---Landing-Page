import CustomButton from '../../components/custom_button/CustomButton';
import path3Img from '../../res/svg/path3.svg'
import './LastSection.css';
export default function LastSection(){
    return(
        <div id="last-section">
            <img src={path3Img} id='last-section-path'/>
            <div id='last-section-content'>
                <h1>A Price To Suit Everyone</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat perspiciatis sequi distinctio iure eligendi nihil nesciunt? Incidunt natus magnam eius nam, commodi minus, dignissimos voluptatum quia quam maiores suscipit!</p>
                <h1>$50</h1>
                <h5>UI Design Kit</h5>
                <span>See, One Price. Simple</span>
                <CustomButton text="Purchase Now"/>
            </div>
        </div>
    )
}