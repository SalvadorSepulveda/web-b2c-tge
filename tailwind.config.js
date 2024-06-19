/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.vue",
        "./components/*.vue",
        "./layouts/**/*.vue",
        "./layouts/*.vue",
        "./pages/**/*.vue",
        "./pages/*.vue",
        "./app.vue",
        "./error.vue",
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            white: '#FFFFFF',
            black: '#181C31',
            primary: '#ff6720',
            secondary: '',
            stroke: '#EBEFF4',
            dark: '#1F233A',
            body: '#79808A',
            bodywhite: '#40454d',
            gray: '#F8F9FF',
            'stroke-dark': '#34374A',
        },
        screens: {
            xs: '450px',
            // => @media (min-width: 450px) { ... }

            sm: '575px',
            // => @media (min-width: 576px) { ... }

            m: '667px',
            // => @media (min-width: 667px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '992px',
            // => @media (min-width: 992px) { ... }

            l: '1016px',
            // => @media (min-width: 1016px) { ... }

            xl: '1200px',
            // => @media (min-width: 1200px) { ... }

            xxl: '1250px',
            // => @media (min-width: 1250px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            backgroundImage: {
                'gradient-1':
                    'linear-gradient(55.15deg, #EA621F -7.09%, #F39A20 51.72%, #ea5200 101.48%)',
                'gradient-2':
                    'linear-gradient(120.12deg, #EA621F 0%, #ffca71 100%)',
                'gradient-3':
                    'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%)',
                texture: "url('https://cdn.topgroups.travel/websites/assets/images/texture.png')",
            },
            screens: {
                xs: '450px',
                '3xl': '1500px',
            },
            boxShadow: {
                card: '0px 1px 5px rgba(45, 74, 170, 0.14)',
                'card-dark': '0px 1px 5px rgba(16, 25, 55, 0.14)',
                input: '0px 10px 30px rgba(74, 108, 247, 0.08)',
            },
            dropShadow: {
                card: '0px 1px 5px rgba(45, 74, 170, 0.14)',
                'card-dark': '0px 1px 5px rgba(16, 25, 55, 0.14)',
            },
        },
    },
    plugins: [],
}