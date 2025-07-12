/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'custom': '1fr 1fr 1fr 1fr 1fr 1fr',
            },
            textColor: {

                'primaryTextClr': '#b4b2b2',
                'hClr': '#302f2f',
                'secondaryTextClr': '#3AB19B',
            },
            colors: {
                primary: " #663200",
                secondary: "#ff8901",
            },
            backgroundColor: {
                'primaryBg-clr': 'white',
                'secondaryBgClr': '#3AB19B',
            },
            keyframes: {
                'fade-in-right': {
                    '0%': { opacity: 0, transform: 'translateX(60px)' },
                    '100%': { opacity: 1, transform: 'translateX(0)' },
                },
            },
            animation: {
                'fade-in-right': 'fade-in-right 0.7s cubic-bezier(0.4,0,0.2,1) both',
            },
        },
    },
    plugins: [],
}