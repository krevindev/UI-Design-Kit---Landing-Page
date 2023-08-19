import './CustomButton.css';

export default function CustomButton({ type, text }) {

    const btnClass = type == 'default' ? 'default-btn' : type == 'border' ? 'border-btn' : 'default-btn';

    return (
        <button className={btnClass}>
            <div
                className='cover'
            />
            <span>{text}</span>
        </button>
    )
}