import { ToastContainer } from 'react-toastify'
import { SmileyIcon } from '@icons'

const getIcon = (type: string) => {
    switch (type) {
        case 'success':
            return (
                <div className='relative'>
                    <div className=' size-6 bg-success-20 rounded-full'></div>
                    <SmileyIcon className='text-dark shrink-0 absolute right-1 top-1' />
                </div>
            )
        default:
            return undefined
    }
}

const ToastProvider = () => {
    return (
        <ToastContainer
            rtl
            className='font-yekan-bakh'
            bodyClassName={'gap-x-2.5 items-start'}
            closeOnClick
            autoClose={3000}
            icon={({ type }) => getIcon(type)}
        />
    )
}

export default ToastProvider
