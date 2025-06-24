import React from "react";

function Header() {
    const smoothScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (!element) return;

        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = window.pageYOffset + elementRect.top;
        const middleOfScreen = window.innerHeight / 2;
        const elementMiddle = elementRect.height / 2;

        const scrollTo = absoluteElementTop - middleOfScreen + elementMiddle;

        window.scrollTo({ top: scrollTo, behavior: "smooth" });
    };
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header style={{ fontFamily: "Orbitron", color: "black", textAlign: "center" }} className="sticky top-[50px] z-40 bg-base-100 w-full max-w-250 mx-auto text-black px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
            <img
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExajFiNDF4d3l1eHo4aG1udmR5cmZtMHJ1ZGthbDJ1YXQyZHMyam0ydCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0bF32A7QYSUBxMNibo/giphy.gif"
                alt="Logo"
                className="h-15 w-25 cursor-pointer"
                onClick={scrollToTop}
            />
            <ul className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase text-center flex-1">
                <li><a href="#about" onClick={(e) => smoothScroll(e, "about")} className="hover:text-[#29B6F6] cursor-pointer font-orbitron" > ABOUT </a> </li>
                <li><a href="#how-to-mint" onClick={(e) => smoothScroll(e, "how-to-mint")} className="hover:text-[#29B6F6] cursor-pointer font-pressstart" > HOW TO MINT </a></li>
                <li><a href="#faq" onClick={(e) => smoothScroll(e, "faq")} className="hover:text-[#29B6F6] cursor-pointer font-vt323" >FAQ</a></li>
                <li><a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#29B6F6] cursor-pointer font-vt323">WHITEPAPER</a></li>
            </ul>
            <button className="bg-[#29B6F6] text-black px-4 py-2 rounded text-sm font-semibold whitespace-nowrap">
                MINT $ZETHT
            </button>
        </header>
    );
}

export default Header;
