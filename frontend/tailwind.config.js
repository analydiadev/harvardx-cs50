// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                press: ['Press Start 2P', 'monospace'],
                vt: ['VT323', 'monospace'],
            },
            maxWidth: {
                '3xl': '768px',
            },
        },
    },
    plugins: [require('daisyui')],
};