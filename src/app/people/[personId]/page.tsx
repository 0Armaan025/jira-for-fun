"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ThemeChangeBtn } from '@/components/theme-change-btn';

type Props = {}

const page = (props: Props) => {


    const { resolvedTheme, theme, setTheme } = useTheme();
    const personId = usePathname().split("/").pop();



    const changeTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }


    return (
        <>

            <div className="personProfile min-h-screen w-full flex flex-col justify-center items-center">

                <h3>{personId}</h3>
                <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />
            </div>

        </>
    )
}

export default page