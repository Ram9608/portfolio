/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'page-bg': '#1E1E2F',
                'primary': '#4F46E5', // Neon Purple-Blue
                'card-bg': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
                heading: ['Montserrat', 'Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'futuristic-grid': "radial-gradient(#4f46e5 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
