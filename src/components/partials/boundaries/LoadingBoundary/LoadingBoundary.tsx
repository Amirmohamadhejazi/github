import { cn } from '@core/utils/common/cn'

import { type ILoadingBoundaryProps } from './resources'

const LoadingBoundary = ({ className = '' }: ILoadingBoundaryProps) => {
    return (
        <div className={cn('flex flex-col items-center justify-center gap-y-2 w-full h-full p-4', className)}>
            Loading boundary
        </div>
    )
}

export default LoadingBoundary
