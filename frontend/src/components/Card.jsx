function Card({
    title,
    description,
    buttonText,
    bgColor,
    textColor,
    buttonClass,
    maxWidth,
    customClass,
    gif
}) {
    return (
        <div
            style={{ backgroundColor: 'rgb(237, 241, 8)' }} className={`relative w-full ${maxWidth} mx-auto border-b-4 border-black rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)] ${bgColor} ${customClass}`}>
            {gif && (<img src={gif} alt="cyber gif" className="absolute -top-6 -left-6 w-50 h- rounded-md z-10" />)}
            <div className={`card-body text-center mt-4 ${textColor}`}>
                <h1 style={{ fontSize: '5rem', color: 'black' }} className="card-title justify-center">
                    {title}
                </h1>
                <p style={{ fontSize: '1rem', color: 'black' }} className="text-sm">
                    {description}
                </p>
                <div className="card-actions justify-center mt-4">
                    <button className={`px-10 py-3 rounded font-bold animate-blink ${buttonClass}`}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
