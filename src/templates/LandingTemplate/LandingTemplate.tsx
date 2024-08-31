const LandingTemplate = () => {
    return (
        <div className='flex grow overflow-auto *:py-4 *:px-6'>
            {/* <div className='w-2 h-[10000px] bg-red-500'>s</div> */}
            <div className='w-full flex max-w-[335px] border-r border-[#475161] bg-[#30363db3]  overflow-auto'>
                <span className='size-full bg-blue-900'>A</span>
            </div>
            <div className='flex grow  overflow-auto'>
                <div className='w-full grid grid-cols-7 gap-3'>
                    <div className='col-span-5 bg-slate-500'>content</div>
                    <div className='col-span-2 bg-slate-600'>content</div>
                </div>
            </div>
        </div>
    )
}

export default LandingTemplate
