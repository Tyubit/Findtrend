import React from 'react'

type HeaderCard = {
    icon?: string
    title: string,
}
export const HeaderCard = ({icon,title}:HeaderCard) => {
return (
    <div className='z-10 relative flex items-center bg-[#181818] py-3 pr-3 overflow-x-hidden'>
        <img src={icon} alt="social icon" className='pl-7'/>
        <h3 className='text-white pl-3 text-[23px] whitespace-nowrap'>{title}</h3>
        <button className='md:hidden flex flex-col gap-1 justify-center items-center h-full w-10 absolute right-0' style={{ background: 'linear-gradient(to right, transparent 10%, #181818 90%)' }}>
            <span className="w-5 h-0.5 bg-background rotate-45 translate-y-[3px]"></span>
            <span className="w-5 h-0.5 bg-background -rotate-45 translate-y-[-3px]"></span>
        </button>
        <span className='h-full w-8 right-0'/>
    </div>
)
}
