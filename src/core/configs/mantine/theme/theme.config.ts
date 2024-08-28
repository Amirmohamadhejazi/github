import { generateColors } from '@mantine/colors-generator'
import { Badge, createTheme, Indicator } from '@mantine/core'

import { MANTINE_COLORS, TAILWIND_COLORS } from '@core/configs/colors'
const MANTINE_THEME = createTheme({
    colors: MANTINE_COLORS,
    primaryColor: 'green',
    breakpoints: {
        xs: '30em',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    primaryShade: { light: 5, dark: 5 },
    components: {
        Badge: Badge.extend({
            defaultProps: {
                color: 'green',
            },
            vars: ({ colors }, { variant, color }) => {
                const isFromColorPalette = color && Object.keys(TAILWIND_COLORS).includes(color)
                const hexCodeToPaletteArray = !isFromColorPalette && color && generateColors(color)
                switch (variant) {
                    case 'light':
                        return {
                            root: {
                                '--badge-bg': isFromColorPalette
                                    ? colors[color][1]
                                    : hexCodeToPaletteArray
                                    ? hexCodeToPaletteArray[1]
                                    : color,
                                '--badge-color': isFromColorPalette
                                    ? colors[color][7]
                                    : hexCodeToPaletteArray
                                    ? hexCodeToPaletteArray[7]
                                    : color,
                            },
                        }
                    case 'filled':
                        return {
                            root: {
                                '--badge-bg': isFromColorPalette
                                    ? colors[color][5]
                                    : hexCodeToPaletteArray
                                    ? hexCodeToPaletteArray[5]
                                    : color,
                                '--badge-color': '#fff',
                            },
                        }
                    case 'default':
                        return {
                            root: {
                                '--badge-bg': 'transparent',
                                '--badge-bd': 'none',
                                '--badge-color': isFromColorPalette
                                    ? colors[color][5]
                                    : hexCodeToPaletteArray
                                    ? hexCodeToPaletteArray[5]
                                    : color,
                            },
                        }
                    default:
                        break
                }
                return {
                    root: {
                        '--badge-bg': isFromColorPalette
                            ? colors[color][5]
                            : hexCodeToPaletteArray
                            ? hexCodeToPaletteArray[5]
                            : color,
                        '--badge-color': '#fff',
                    },
                }
            },
        }),
        Indicator: Indicator.extend({
            defaultProps: {
                color: 'green',
            },
            vars: ({ colors }, { color }) => {
                return {
                    root: {
                        '--indicator-color': color && colors[color][4],
                    },
                }
            },
        }),
    },
})
export default MANTINE_THEME
