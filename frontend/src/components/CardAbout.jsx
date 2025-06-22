function CardAbout({
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
                backgroundColor: 'rgb(0, 0, 0)',
                fontFamily: 'Audiowide',
                fontWeight: '900',
                userSelect: 'none',
                letterSpacing: '-0.05em',
                textTransform: 'uppercase',
                width: '300px',
                height: '190px',
                color: '#29B6F6'
            }}
            className={`mx-auto mb-5 border-b-4 border-#29B6F6 rounded-3xl shadow-[10px_10px_20px_rgba(41,182,246,0.5)] ${bgColor} ${customClass} overflow-hidden`}
        >
            <div className={`card-body text-center ${textColor} h-full flex flex-col justify-center`}>
                <h1 className="card-title justify-center whitespace-nowrap overflow-hidden text-ellipsis">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CardAbout;