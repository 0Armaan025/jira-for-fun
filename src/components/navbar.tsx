"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';


const Navbar = () => {

    const [isShown, setIsShown] = useState(false);

    return (
        <>
            <div className="navbar flex flex-col sm:flex-row justify-between items-center py-6 px-4 bg-gray-100 dark:bg-[#1a1a1a] dark:border-b-2 dark:border-b-gray-800 shadow-md">
                <Link href="/">
                    <div className="logo mb-4 sm:mb-0 sm:ml-8 hover:cursor-pointer transition-all hover:scale-105" >
                        <Image src="/logo.svg" height={70} width={200} alt="logo" />
                    </div>
                </Link>

                <div className='sm:mr-8 '>
                    <ul className='flex flex-col text-2xl sm:flex-row gap-6 --font-poppins' style={{ fontFamily: "Poppins" }}>
                        <li className='text-gray-800 dark:text-gray-200 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gray-800 dark:hover:decoration-gray-300 transition-all'>Home</li>
                        <li className='text-gray-800 dark:text-gray-200 cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-gray-800 dark:hover:decoration-gray-300 transition-all'>About</li>


                        <div className="relative">
                            <Avatar className='ml-6 cursor-pointer transition-all hover:scale-105 h-8 w-8'
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setTimeout(() => setIsShown(false), 900)}>

                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>smthing</AvatarFallback>
                            </Avatar>

                            {isShown && (
                                <div
                                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10"
                                    onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setTimeout(() => setIsShown(false), 900)}
                                >
                                    <ul className="py-2">
                                        <li className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Profile</li>
                                        <li className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
                                        <li className="px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Log Out</li>
                                    </ul>
                                </div>
                            )}
                        </div>


                    </ul>
                </div>

            </div>

        </>
    );
}

export default Navbar   