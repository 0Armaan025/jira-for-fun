import React from 'react';
import Image from 'next/image';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';


const Navbar = () => {
    return (
        <>
            <div className="navbar flex flex-col sm:flex-row justify-between items-center py-6 px-4 bg-gray-100 dark:bg-[#1a1a1a] dark:border-b-2 dark:border-b-gray-800 shadow-md">
                <div className="logo mb-4 sm:mb-0 sm:ml-8 hover:cursor-pointer transition-all hover:scale-105">
                    <Image src="/logo.svg" height={70} width={200} alt="logo" />
                </div>

                <div className='sm:mr-8 '>
                    <ul className='flex flex-col text-2xl sm:flex-row gap-6 --font-poppins' style={{ fontFamily: "Poppins" }}>
                        <li className='text-gray-800 dark:text-gray-200 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gray-800 dark:hover:decoration-gray-300 transition-all'>Home</li>
                        <li className='text-gray-800 dark:text-gray-200 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gray-800 dark:hover:decoration-gray-300 transition-all'>About</li>


                        <Avatar className='ml-6 cursor-pointer transition-all hover:scale-105 h-8 w-8'  >
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>smthing</AvatarFallback>
                        </Avatar>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar   