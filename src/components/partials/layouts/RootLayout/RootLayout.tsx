import { type PropsWithChildren } from 'react'

const RootLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex flex-col h-screen  '>
            <div className='w-full border-b border-[#475161] text-center'>
                <span className='text-2xl'>header</span>
            </div>
            {children}
        </div>
    )
}

export default RootLayout
