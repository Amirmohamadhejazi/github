import type { Config } from 'tailwindcss'

// import { TAILWIND_COLORS } from './src/core/configs/colors'
import { TAILWIND_CUSTOM_CLASSES } from './src/core/constants/tailwind'

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '475px',
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1600px',
        },
        // colors: { ...TAILWIND_COLORS },
        extend: {
            fontFamily: {
                'yekan-bakh': ['var(--font-yekan-bakh)'],
            },
        },
    },
    plugins: [
        ({
            addUtilities,
        }: {
            addUtilities: (utilities: Record<string, NonNullable<unknown>>, variants?: NonNullable<unknown>) => void
        }) => {
            addUtilities(TAILWIND_CUSTOM_CLASSES)
        },
    ],
}
export default config
