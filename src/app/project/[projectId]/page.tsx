"use client";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ClipboardList, ListCheck, ListCheckIcon, ListChecksIcon, CalendarDays } from 'lucide-react';



import { ThemeChangeBtn } from '@/components/theme-change-btn';
import Sidebar from '@/components/side-bar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';



const ProjectPage = () => {

    const projectId = usePathname().split('/')[2];

    const { resolvedTheme, theme, setTheme } = useTheme();

    const [chosenItem, setChosenItem] = useState('Backlog');

    const handleItemClick = (item: string) => {
        setChosenItem(item);
    }


    const changeTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <>
            <div className="projectPage min-h-screen">
                <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />

                <div className="flex flex-row w-full min-h-screen">

                    <Sidebar setChosenItem={handleItemClick} chosenItem={chosenItem} />
                    <div className="content flex flex-col ">
                        {chosenItem === "Backlog" && (
                            <>
                                <h3 className='text-3xl font-semibold mt-6 ml-8'>Backlog for Project: {projectId}</h3>

                                <div className="members flex flex-row">
                                    <input type="search" placeholder='Search' className='px-6 py-3 border-1 border-gray-600 rounded-md ml-8 mt-4 w-80' />
                                    <Avatar className='w-20 h-18'>
                                        <AvatarImage src="https://plus.unsplash.com/premium_photo-1744193093539-8278a47ae01c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Avatar" className='ml-4 mt-4' />
                                        <AvatarFallback>Hi there</AvatarFallback>
                                    </Avatar>
                                    <Avatar className='w-20 h-18 ml-[-2rem] border-2 border-white'>
                                        <AvatarImage src="https://plus.unsplash.com/premium_photo-1744193093539-8278a47ae01c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Avatar" className='ml-4 mt-4' />
                                        <AvatarFallback>Hi there</AvatarFallback>
                                    </Avatar>
                                </div>

                            </>
                        )}
                    </div>


                </div>




            </div>
        </>
    );
}

export default ProjectPage