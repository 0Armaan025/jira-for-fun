"use client";
import { ThemeChangeBtn } from '@/components/theme-change-btn';
import { SignIn } from '@clerk/nextjs'
import { useTheme } from 'next-themes';

export default function Page() {

    const { resolvedTheme, theme, setTheme } = useTheme();



    const changeTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
    return (


        <>
            <div className="flex w-full min-h-screen flex-col justify-center items-center">

                <SignIn />
                <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />

            </div>
        </>
    );
} 