function CardFAQ({
    title,
    description,
    bgColor,
    textColor,
    maxWidth,
    customClass
}) {
    return (
        <div
            style={{
                backgroundColor: " #29B6F6",
                fontFamily: 'Audiowide',
                fontWeight: '900',
                userSelect: 'none',
                width: '300px',
                height: '190px',
                textTransform: 'uppercase',
                color: 'rgb(0, 0, 0)'
            }}
            className={`mx-auto mb-5 border-b-4 border-#29B6F6 rounded-3xl shadow-[10px_10px_20px_rgba(0,0,0,0.5)] ${bgColor} ${customClass} overflow-hidden`}>
            <div className={`card-body text-center ${textColor}`}>
                {title && <h2 className="card-title justify-center mb-5 ">{title}</h2>}
                {description && <p className="text-sm mb-10">{description}</p>}
            </div>
        </div >
    );
}

export default CardFAQ;
