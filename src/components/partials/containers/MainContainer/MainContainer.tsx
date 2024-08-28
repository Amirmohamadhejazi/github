import { Children } from 'react'

import { type IDivElementProps } from '@core/types/html'
import { cn } from '@core/utils/common/cn'

import { Content, Header } from './resources'

const MainContainer = ({ children, className, ...rest }: IDivElementProps) => {
    return (
        <div
            className={cn('w-full flex py-6 px-4 sm:p-8 lg:p-14 xl:p-20 max-w-screen-2xl m-auto', className, {
                'flex-col gap-8': Children.count(children) !== 1,
            })}
            {...rest}
        >
            {children}
        </div>
    )
}

MainContainer.Header = Header

MainContainer.Content = Content

export default MainContainer
