import './IconCard.css';

import section2Icon from '../../res/svg/section2-icon.svg';

export default function IconCard() {
    return (
        <div className='icon-card'>
            <div className='icon-card-part'>
                <img src={section2Icon} />
            </div>
            <div className='icon-card-part'>
                <h4>Title Goes Here</h4>
            </div>
            <div className='icon-card-part'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat perspiciatis sequi distinctio iure eligendi
                </p>
            </div>
        </div>
    )
}