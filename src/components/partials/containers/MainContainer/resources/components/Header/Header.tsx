import { cn } from '@core/utils/common/cn'

import { type IHeaderProps } from './resources'

const Header = ({ children, className, ...rest }: IHeaderProps) => {
    return (
        <div className={cn('w-full flex', className)} {...rest}>
            {children}
        </div>
    )
}

export default Header
