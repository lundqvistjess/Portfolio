/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral palette
        white: '#FFFFFF',
        'gray-50': '#F8F8F8',
        'gray-100': '#F0F0F0',
        'gray-200': '#E8E8E8',
        'gray-300': '#D8D8D8',
        'gray-400': '#4D4D4D',
        'gray-600': '#333333',
        'gray-900': '#1A1A1A',

        // Brand accent
        'accent-green': '#6B8E23',
        'accent-green-light': '#8AB84F',
        'accent-green-dark': '#5A7A1F',
      },
      spacing: {
        'xs': '0.25rem',  // 4px
        'sm': '0.5rem',   // 8px
        'md': '1rem',     // 16px
        'lg': '1.5rem',   // 24px
        'xl': '2rem',     // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '3.5rem', fontWeight: '600' }],      // 48px/56px
        'h1-mobile': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }], // 32px/40px
        'h2': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '600' }],   // 36px/44px
        'h2-mobile': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px/32px
        'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],       // 24px/32px
        'h4': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '600' }],  // 18px/28px
        'body': ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }],     // 16px/28px
        'caption': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px/20px
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      screens: {
        sm: '640px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
