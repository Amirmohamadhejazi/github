import React, { type FC, type PropsWithChildren } from 'react'
import RootLayout from '@partials/layouts/RootLayout/RootLayout'

const layout: FC<PropsWithChildren> = ({ children }) => {
    return <RootLayout>{children}</RootLayout>
}

export default layout
