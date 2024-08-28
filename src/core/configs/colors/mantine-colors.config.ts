import { type MantineColorsTuple } from '@mantine/core'

import { type TColorsType } from '@core/types/colors'

const MANTINE_COLORS: Record<TColorsType, MantineColorsTuple> = {
    green: [
        '#e9f2ef', //0. 50
        '#deece7', //1. 100
        '#bbd7ce', //2. 200
        '#237d61', //3. 300
        '#207157', //4. 400 indicator background color
        '#1c644e', //5. 500 badge background color
        '#1a5e49', //6. 500
        '#154b3a', //7. 700
        '#10382c', //8. 700
        '#0c2c22', //9. 900
    ],
    yellow: [
        '#fffbef', //0. 50
        '#fff9e7', //1. 100
        '#fff2cc', //2. 200
        '#fed65c', //3. 300
        '#e5c153', //4. 400 indicator background color
        '#cbab4a', //5. 500 badge background color
        '#bfa145', //6. 500
        '#988037', //7. 700
        '#726029', //8. 700
        '#594b20', //9. 900
    ],
    neutral: [
        '#f6f6f6', //0. 50
        '#f1f1f1', //1. 100
        '#e3e3e3', //2. 200
        '#a4a4a4', //3. 300
        '#949494', //4. 400 indicator background color
        '#838383', //5. 500 badge background color
        '#7b7b7b', //6. 500
        '#626262', //7. 700
        '#4a4a4a', //8. 700
        '#393939', //9. 900
    ],
}

export default MANTINE_COLORS
