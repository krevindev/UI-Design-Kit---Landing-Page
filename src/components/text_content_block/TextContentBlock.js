import { useRef } from 'react';
import useIsElementVisible from '../../hooks/useIsElementVisible';
import './TextContentBlock.css';

export default function TextContentBlock({ headingText, paragraphContent, children }) {

    const textContentBlockRef = useRef(null);
    const isVisible = useIsElementVisible(textContentBlockRef);

    return (
        <div className="text-content-block media-part" ref={textContentBlockRef}>
            <div className={"text-content-heading-container " + (isVisible ? 'fade-in' : '')}>
                <h1>{headingText}</h1>
            </div>
            <div className={'text-content-paragraph-container  ' + (isVisible ? 'fade-in' : '')}>
                <p>{paragraphContent}</p>
            </div>
            {
                children && <div className={'text-content-children-container ' + (isVisible ? 'fade-in' : '')}>
                    {children}
                </div>
            }
        </div>
    )
}