import { TAILWIND_CUSTOM_CLASSES } from '@core/constants/tailwind'

const TAILWIND_PLUGINS = [
    ({
        addUtilities,
    }: {
        addUtilities: (utilities: Record<string, NonNullable<unknown>>, variants?: NonNullable<unknown>) => void
    }) => {
        addUtilities(TAILWIND_CUSTOM_CLASSES)
    },
]

export default TAILWIND_PLUGINS
