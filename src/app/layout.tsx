import { type FC } from 'react'
import type { Metadata } from 'next'
import { RootProvider } from '@partials/providers/RootProviders'

import { YEKAN_BAKH_FONT } from '@core/configs/fonts'
import { type ILayoutProps } from '@core/types'

import '@styles/globals.css'

export const metadata: Metadata = {
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

const Layout: FC<ILayoutProps> = ({ children }) => {
    return (
        <html lang={'fa'} dir='rtl' className={YEKAN_BAKH_FONT.variable}>
            <body dir='rtl' className={YEKAN_BAKH_FONT.variable}>
                <RootProvider>
                    {children}
                    {/* <RootLayout>{children}</RootLayout> */}
                </RootProvider>
            </body>
        </html>
    )
}

export default Layout
