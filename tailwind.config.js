/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                secondary: "#64748b",
                accent: "#8b5cf6",
                success: "#10b981",
                warning: "#f59e0b",
                error: "#ef4444",
                dark: "#0f172a",
                card: "rgba(255, 255, 255, 0.9)",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
        animation: {
            'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            'fade-in': 'fadeIn 0.5s ease-out forwards',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
            fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
            }
        },
    },
    plugins: [],
}
