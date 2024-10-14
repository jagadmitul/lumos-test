/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
        colors: {
          primary: '#195F6B',
          secondary: '#112025',
          teal: {
            600: '#195F6B',
          },
          blue: {
            100: '#ebf8ff',
          },
          gray: {
            100: '#f7fafc',
            800: '#2d3748',
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Adjust this to the font used in the design
        },
        container: {
          center: true,
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1186px',
            xxl: '1680px'
          }
        },
        fontFamily: {
          'outfit': ['Outfit', 'system-ui'],
          'serif': ['ui-serif', 'Georgia'],
        },
        extend: {
          fontSize: {
            xs: '0.875rem',
            sm: '0.938rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2rem',
            '5xl': '2.625rem',
            'font21': '1.313rem',
            'font22': '1.375rem',
          },
          clipPath: {
            'custom-clip': 'polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)',
          },
          colors: {
            ssBlack: '#1C1C1C',
            ssGrey: '#1E1E1E',
            ssGreyLight: '#8E8E8E',
            ssGreyTxt: '#595959',
            ssGreen: '#0BD527',
            ssGreenLight: '#6CE074',
            ssGreenLight2: '#96CD9E',
          },
          lineHeight: {
            lhxs: '1.571',
            lhsm: '1.533',
            lhbase: '1.563',
            lhlg: '1.556',
            lhxl: '1.3',
            'lh2xl': '1.15',
            'lh3xl': '1.1',
            'lh4xl': '1.094',
            'lh5xl': '1.095',
            'lh34': '1.5',
            'lh21': '1.05',
          },
          letterSpacing: {
            lS042: '-0.42px',
            lS032: '-0.32px',
            lS03: '-0.3px',
            lS024: '-0.24px',
            lS02: '-0.2px',
            lS014: '-0.14px',
          },
          boxShadow: {
            'headershadow': '0 0 16px -8px #fff',
          },
          backgroundImage: {
            'scroller': "data:image/svg+xml,%3Csvg class='scroller__thumb' width='34' height='23' viewBox='0 0 34 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5254 1.90473L20.5254 21.0303C20.5254 21.4005 20.6655 21.7205 20.9456 21.991C21.2259 22.2614 21.5577 22.3965 21.9413 22.3965C22.3249 22.3965 22.657 22.2614 22.9372 21.991L32.851 12.4282C33.1313 12.1574 33.2717 11.8374 33.2717 11.4675C33.2717 11.0975 33.1313 10.7772 32.851 10.507L22.9371 0.944164C22.657 0.674044 22.3249 0.538422 21.9413 0.538422C21.5577 0.538422 21.2259 0.673969 20.9455 0.944164C20.6652 1.21436 20.5254 1.53472 20.5254 1.90473Z' fill='white'%3E%3C/path%3E%3Cpath d='M13.4961 1.90473L13.4961 21.0303C13.4961 21.4005 13.356 21.7205 13.0759 21.991C12.7956 22.2614 12.4637 22.3965 12.0802 22.3965C11.6966 22.3965 11.3645 22.2614 11.0843 21.991L1.17049 12.4282C0.890143 12.1574 0.749775 11.8374 0.749775 11.4675C0.749775 11.0975 0.890143 10.7772 1.17049 10.507L11.0844 0.944164C11.3645 0.674044 11.6966 0.538422 12.0802 0.538422C12.4637 0.538422 12.7956 0.673969 13.076 0.944164C13.3563 1.21436 13.4961 1.53472 13.4961 1.90473Z' fill='white'%3E%3C/path%3E%3C/svg%3E",
            'progressBar': 'linear-gradient(' +
              '-45deg,' +
              'rgba(255, 255, 255, 0.1) 25%,' +
              'transparent 0,' +
              'transparent 50%,' +
              'rgba(255, 255, 255, 0.1) 0,' +
              'rgba(255, 255, 255, 0.1) 75%,' +
              'transparent 0,' +
              'transparent' +
              ')',
            'custom-gradient-black': 'linear-gradient(180deg, #161616 0%, rgba(0, 0, 0, 0.10) 100%)',
            'custom-gradient-green': 'linear-gradient(180deg, rgba(1, 1, 1, 0) 20%, #0BD527 30.5%, rgba(1, 1, 1, 0) 85%)',
            'custom-gradient-top': 'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)',
            'custom-gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 43.65%, #000 98.62%), linear-gradient(270deg, #010101 0%, rgba(1, 1, 1, 0.00) 70%), linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0.00) 100%)'
          },
          keyframes: {
            slideinright: {
              '0%': {
                'max-height': 'unset',
                'transform': 'translateX(-15%)',
                'opacity': '0'
              },
              '50%': {
                'transform': 'translateX(0)'
              },
              '100%': {
                'max-height': 'unset',
                'transform': 'translateX(0)',
                'opacity': '1',
                'pointer-events': 'all'
              },
            },
            slideinleft: {
              '0%': {
                'max-height': 'unset',
                'transform': 'translateX(15%)',
                'opacity': '0'
              },
              '50%': {
                'transform': 'translateX(0)'
              },
              '100%': {
                'max-height': 'unset',
                'transform': 'translateX(0)',
                'opacity': '1',
                'pointer-events': 'all'
              },
            },
            strokeCheck: {
              '100%': {
                'stroke-dashoffset': '0'
              }
            },
            scaleCheck: {
              '0%, 100%': {
                'transform': 'none'
              },
              '50%': {
                'transform': 'scale3d(1.1, 1.1, 1)'
              },
            },
            fillCheck: {
              '100%': {
                'box-shadow': 'inset 0px 0px 0px 3.5rem currentColor'
              },
            },
            moveProgress: {
              '0%': {
                'background-position': '0 0'
              },
              'to': {
                'background-position': '50px 50px'
              },
            },
            flipTop: {
              '0%': {
                'transform': 'rotateX(0deg)',
                'z-index': '2'
              },
              '0%,99%': {
                'opacity': '0.99'
              },
              '100%': {
                'transform': 'rotateX(-90deg)',
                'opacity': '0'
              },
            },
            flipBottom: {
              '0%, 50%': {
                'transform': 'rotateX(90deg)',
                'z-index': '-1',
                'opacity': '0'
              },
              '51%': {
                'opacity': '0.99'
              },
              '100%': {
                'opacity': '0.99',
                'transform': 'rotateX(0deg)',
                'z-index': '5'
              },
            },
            marquee: {
              'from': {
                'transform': 'translateX(0)',
              },
              'to': {
                'transform': 'translateX( calc(-100% - 20px ))',
              },
            },
            scroll: {
              'from': {
                'transform': 'translateX(0)',
              },
              'to': {
                'transform': 'translateX( calc(-150px * 5 ))',
              },
            },
          },
          animation: {
            'slideinright': 'slideinright 0.6s forwards',
            'slideinleft': 'slideinleft 0.6s forwards',
            'fillcheck': 'fillCheck 0.6s ease-in-out 0.4s forwards, scaleCheck 0.3s ease-in-out 0.9s both',
            'strokecheck': 'strokeCheck 0.8s cubic-bezier(0.65, 0, 0.45, 1) forwards',
            'tickcheck': 'strokeCheck 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards',
            'progressbar': 'moveProgress 5s linear infinite',
            'fliptop': 'flipTop 0.3s cubic-bezier(0.37, 0.01, 0.94, 0.35) both',
            'flipbottom': 'flipBottom 0.6s cubic-bezier(0.15, 0.45, 0.28, 1) both',
            'marquee': 'marquee 30s linear infinite',
            'scroll': 'scroll 15s linear infinite',
            'scrollreverse': 'scroll  15s linear infinite reverse',
            'marqueereverse': 'marquee 30s linear infinite reverse',
          },
          content: {
            '': '""',
          },
        }
      },
    },
  },
  plugins: [],
};
