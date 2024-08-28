import { type MantineColorsTuple } from '@mantine/core'

import { type TColorsType } from '@core/types/colors'

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<TColorsType, MantineColorsTuple>
    }
}
