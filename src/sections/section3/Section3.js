import CustomButton from '../../components/custom_button/CustomButton';
import MediaContentBlock from '../../components/media_content_block/MediaContentBlock';
import TextContentBlock from '../../components/text_content_block/TextContentBlock';
import secition3Img1 from '../../res/svg/section3-img.svg';
import secition3Img2 from '../../res/svg/section4-img.svg';
import secition3Img3 from '../../res/svg/section5-img.svg';

import './Section3.css';

export default function Section3() {

    const headingPlaceholder = "Light, Fast & Powerful";
    const paragraphPlaceholder = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat perspiciatis sequi distinctio iure eligendi nihil nesciunt? Incidunt natus magnam eius nam, commodi minus, dignissimos voluptatum quia quam maiores suscipit!";

    return (
        <div id="section3" className='main-section'>
            <div className='section3-row'>
                <MediaContentBlock isFlipped imgSrc={secition3Img1}>
                    <TextContentBlock headingText={headingPlaceholder} paragraphContent={paragraphPlaceholder} />
                </MediaContentBlock>
            </div>
            <div className='section3-row'>
                <MediaContentBlock isFlipped imgSrc={secition3Img2}>
                    <TextContentBlock headingText={headingPlaceholder} paragraphContent={paragraphPlaceholder} />
                </MediaContentBlock>
            </div>
            <div className='section3-row'>
                <MediaContentBlock isFlipped imgSrc={secition3Img3}>
                    <TextContentBlock headingText={headingPlaceholder} paragraphContent={paragraphPlaceholder}>
                        <CustomButton text="Purchase Now" />
                    </TextContentBlock>
                </MediaContentBlock>
            </div>
        </div>
    )
}