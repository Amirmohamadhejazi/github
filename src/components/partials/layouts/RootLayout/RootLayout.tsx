import { type PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className='w-full border-b border-white text-center'>
                <span className='text-2xl'>header</span>
            </div>
            {children}
        </>
    )
}

export default RootLayout
