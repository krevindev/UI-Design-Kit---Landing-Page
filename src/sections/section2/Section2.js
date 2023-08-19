import MediaContentBlock from '../../components/media_content_block/MediaContentBlock';
import TextContentBlock from '../../components/text_content_block/TextContentBlock';
import section2Img from '../../res/svg/section2-img.svg';
import './Section2.css';
import IconCard from '../../components/icon_card/IconCard';

export default function Section2() {
    return (
        <div id="section2" className='main-section'>
            <MediaContentBlock imgSrc={section2Img} >
                <TextContentBlock
                    paragraphContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat perspiciatis sequi distinctio iure eligendi nihil nesciunt? Incidunt natus magnam eius nam, commodi minus, dignissimos voluptatum quia quam maiores suscipit!"
                    headingText="Light, Fast & Powerful"
                >
                    <IconCard />
                    <IconCard />
                </TextContentBlock>
            </MediaContentBlock>
        </div>
    )
}

