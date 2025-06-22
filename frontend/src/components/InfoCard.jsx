
import { useState } from 'react';

function InfoCard({
    title,
    image,
    highlight,
    description,
    comment,
    footerText,
    tags = [],
    tagDescriptions = [],
    className = "",
}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            style={{ fontFamily: 'Audiowide', fontWeight: '900', userSelect: 'none', letterSpacing: '-0.05em', textTransform: 'uppercase' }}
            className={`flex flex-col gap-4 text-black ${className}`}
        >
            <h2 className="text-2xl mt-8 md:text-3xl font-extrabold uppercase leading-tight">
                {title}
                <img src={image} alt="cyber gif" className="w-10 h-10 inline-block rounded-sm ml-2" />
            </h2>

            <p style={{ fontSize: '1.2rem', color: 'black' }} className="text-sm md:text-base font-medium">
                <strong className="inline-block mt-4 mb-4">{highlight}</strong>
                <br />
                {description}
                <br />
                <strong>{footerText}</strong>
            </p>

            <div className="flex gap-4 items-center">
                <span className="text-sm font-semibold">{comment}</span>
            </div>

            <div className="flex gap-4 flex-wrap">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center mr-2"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {hoveredIndex === index && (
                            <span
                                className="absolute -top-2 min-w-[160px] text-center px-2 py-1 text-xs text-gray-900   bg-white bg-opacity-60 backdrop-blur-md rounded-md shadow-md select-none pointer-events-none whitespace-nowrap z-10"
                            >
                                {tagDescriptions[index] || tag}
                            </span>
                        )}
                        <button className="btn btn-warning mt-5 hover:bg-[#29B6F6] cursor-pointer">
                            {tag}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoCard;
