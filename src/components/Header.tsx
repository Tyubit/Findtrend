"use client";

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { MdClose } from "react-icons/md";
import Button from './Buttons'


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const topLine = useRef(null);
    const btmLine = useRef(null);

    useEffect(() => {
        if (menuOpen) {
            gsap.to(topLine.current, {
                rotation: 45,
                y: 3,
                duration: 0.3,
                transformOrigin: 'center',
            })
            gsap.to(btmLine.current, {
                rotation: -45,
                y: -3,
                duration: 0.3,
                transformOrigin: 'center',
            })
        } else {
            gsap.to(topLine.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
              })
              gsap.to(btmLine.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
              })
        }
    },[menuOpen])
return (
    <header className='relative flex flex-col md:flex-row md:items-center md:justify-center mx-4 z-10 text-background'>
        <div className='flex justify-between items-center'>
            <img src="/logo.svg" alt="Logo" className='md:hidden' />
            
            <button className='md:hidden flex flex-col gap-1 w-6 aspect-square justify-center' onClick={() => setMenuOpen(!menuOpen)}>
                <span ref={topLine} className="w-5 h-0.5 bg-background"></span>
                <span ref={btmLine} className="w-5 h-0.5 bg-background"></span>
            </button>
        </div>

        {menuOpen && (
            <nav className='flex flex-col justify-center gap-10 pt-24 pb-20'>
                <button>About</button>
                <button>How It Works</button>
                <button>Pricing</button>
                <button>Solution</button>
                <button>Features</button>
                <button>Login</button>
                <Button>Register</Button>
            </nav>
        )}

        {/* Desktop style */}
        <div className='font-bold max-md:mr-0 lg:mr-56 hidden md:flex items-center justify-center'>
            <img src="/logo.svg" alt="Logo" />
            <h1 className=''>Findtrend</h1>
        </div>

        <nav className='flex max-md:hidden flex-nowrap'>
            <ul className='flex gap-10 items-center '>
                <li>About</li>
                <li>How It Works</li>
                <li>Pricing</li>
                <li>Solution</li>
                <li>Features</li>
            </ul>

            <div className='flex gap-10 max-md:ml-0 lg:ml-44'>
                <button>Login</button>
                <Button>Register</Button>
            </div>
        </nav>
    </header>
)
}
