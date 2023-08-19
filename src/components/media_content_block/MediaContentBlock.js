import { useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import './MediaContentBlock.css';

export default function MediaContentBlock({ children, imgSrc, isFlipped = false }) {

    const mediaContentBlockRef = useRef(null);
    const isVisible = useIsElementVisible(mediaContentBlockRef);

    return (
        <div
            className={isFlipped ? 'media-content-block flipped' : 'media-content-block'}
            ref={mediaContentBlockRef}
        >
            {children}
            <div className={isVisible ? "media-content-img-container media-part fade-in" : "media-content-img-container media-part"} >
                <img src={imgSrc} />
            </div>
        </div>
    )
}