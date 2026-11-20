import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fv-sky':        '#63CCF5',
        'fv-sky-light':  '#EAF7FE',
        'fv-sky-mid':    '#C8EDFB',
        'fv-pink':       '#EC508C',
        'fv-pink-light': '#FDEEF4',
        'fv-lime':       '#D6DF2D',
        'fv-lime-light': '#F7F9D5',
        'fv-navy':       '#0A2D61',
        'fv-navy-dark':  '#071e45',
        'fv-navy-light': '#1A4080',
        'fv-gray':       '#A3A3A3',
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)', 'sans-serif'],
        nunito:  ['var(--font-nunito)',  'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'cartoon':       '5px 5px 0 0 #0A2D61',
        'cartoon-sm':    '3px 3px 0 0 #0A2D61',
        'cartoon-lg':    '8px 8px 0 0 #0A2D61',
        'cartoon-pink':  '5px 5px 0 0 #EC508C',
        'cartoon-lime':  '5px 5px 0 0 #D6DF2D',
        'cartoon-sky':   '5px 5px 0 0 #63CCF5',
        'cartoon-white': '5px 5px 0 0 rgba(255,255,255,0.5)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        floatAlt: {
          '0%,100%': { transform: 'translateY(-10px) rotate(-3deg)' },
          '50%':     { transform: 'translateY(4px) rotate(3deg)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-5deg)' },
          '50%':     { transform: 'rotate(5deg)' },
        },
        pop: {
          '0%':   { transform: 'scale(1)' },
          '50%':  { transform: 'scale(1.12)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        cloudDrift: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%':     { transform: 'translateX(20px)' },
        },
      },
      animation: {
        'float':        'float 3s ease-in-out infinite',
        'float-alt':    'floatAlt 4s ease-in-out infinite',
        'float-slow':   'float 5s ease-in-out infinite',
        'wiggle':       'wiggle 2.5s ease-in-out infinite',
        'pop':          'pop 2s ease-in-out infinite',
        'spin-slow':    'spin 10s linear infinite',
        'spin-reverse': 'spin 8s linear infinite reverse',
        'marquee':      'marquee 18s linear infinite',
        'cloud-drift':  'cloudDrift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
