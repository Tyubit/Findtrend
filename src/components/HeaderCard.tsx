import React from 'react'

type HeaderCard = {
    icon?: string
    title: string,
    className?: string
}
export const HeaderCard = ({icon,title,className}:HeaderCard) => {
return (
    <div className={`z-10 relative flex items-center bg-[#181818] py-3 pr-3 overflow-x-hidden  ${className}`}>
        <img src={icon} alt="social icon" className='aspect-square pl-4'/>
        <h3 className='text-white pl-3 text-[23px] whitespace-nowrap'>{title}</h3>
        <button className='flex flex-col justify-center items-center h-full w-12 absolute right-0'>
            <span className="z-10 w-5 h-0.5 bg-background rotate-45"></span>
            <span className="z-10 w-5 h-0.5 bg-background -rotate-45 translate-y-[-2px]"></span>
        </button>
        <div className='h-full w-30 absolute right-0' style={{ background: 'linear-gradient(to right, transparent 0%, #181818 60%)' }}/>
    </div>
)
}
