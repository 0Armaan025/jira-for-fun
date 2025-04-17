"use client";
import { ThemeChangeBtn } from '@/components/theme-change-btn';
import { SignUp } from '@clerk/nextjs'
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
                <SignUp />
                <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />

            </div>
        </>
    );
}