/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                softBlue: 'hsl(215, 51%, 70%)',
                cyan: 'hsl(178, 100%, 50%)',
                bgDarkBlue: 'hsl(217, 54%, 11%)',
                cardDarkBlue: 'hsl(216, 50%, 16%)',
                lineDarkBlue: 'hsl(215, 32%, 27%)',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
};