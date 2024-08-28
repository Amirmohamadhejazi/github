import { cn } from '@core/utils/common/cn'

import { type IErrorBoundaryProps } from './resources'

const ErrorBoundary = ({ className = '' }: IErrorBoundaryProps) => {
    return (
        <div className={cn('flex flex-col items-center justify-center gap-y-2 w-full h-full', className)}>
            Error Boundry
        </div>
    )
}

export default ErrorBoundary
