import { cn } from '@core/utils/common/cn'

import { type IEmptyBoundaryProps } from './resources'

const EmptyBoundary = ({ className = '' }: IEmptyBoundaryProps) => {
    return (
        <div className={cn('flex flex-col justify-center items-center text-center gap-2.5', className)}>
            EmptyBoundary
        </div>
    )
}

export default EmptyBoundary
