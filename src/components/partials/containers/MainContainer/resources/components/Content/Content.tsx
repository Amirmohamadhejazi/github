import { cn } from '@core/utils/common/cn'

import { type IContentProps } from './resources'

const Content = ({ children, className, ...rest }: IContentProps) => {
    return (
        <div className={cn('w-full', className)} {...rest}>
            {children}
        </div>
    )
}

export default Content
