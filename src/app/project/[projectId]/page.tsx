"use client";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ClipboardList, ListCheck, ListCheckIcon, ListChecksIcon, CalendarDays } from 'lucide-react';



import { ThemeChangeBtn } from '@/components/theme-change-btn';
import Sidebar from '@/components/side-bar';



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
                    <div className="content">
                        {chosenItem === "Backlog" && (
                            <>
                                <h3> chosen item is backlog </h3>
                            </>
                        )}
                    </div>


                </div>




            </div>
        </>
    );
}

export default ProjectPage