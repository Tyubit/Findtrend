"use client";

import { useState } from 'react'
import { MdClose } from "react-icons/md";
import Button from './Buttons'


export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true)

return (
    <header className='flex flex-col md:flex-row md:items-center md:justify-center mt-6 mx-4'>
        <div className='flex justify-between items-center'>
            <img src="/logo.svg" alt="Logo" className='md:hidden' />
            
            {menuOpen ?
                (<button onClick={() => setMenuOpen(false)}><MdClose /></button>) :
                (<button className='md:hidden flex flex-col gap-1' onClick={() => setMenuOpen(true)}>
                <span className="w-6 h-0.5 bg-black"></span>
                <span className="w-6 h-0.5 bg-black"></span>
                </button>)}
        </div>

        {menuOpen && (
            <nav className='flex flex-col justify-center gap-10'>
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
        <div className='flex items-center font-bold max-md:mr-0 lg:mr-56 hidden md:block'>
            <img src="/logo.svg" alt="Logo" />
            <h1 className=''>Findtrend</h1>
        </div>

        <nav className='flex max-md:hidden'>
            <ul className='flex gap-10'>
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
