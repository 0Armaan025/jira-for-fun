"use client";
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';


import { Button } from '@/components/ui/button';
import { ThemeChangeBtn } from '@/components/theme-change-btn';
import Link from 'next/link';



type Props = {
    theme: string;
    changeTheme: () => void;

}

const HomePage = ({ theme, changeTheme }: Props) => {

    const { isLoaded, isSignedIn, user } = useUser();




    const [userExists, setUserExists] = useState(false);


    useEffect(() => {

        if (!isLoaded || !isSignedIn) {
            setUserExists(false);
        }
        else {
            setUserExists(true);
        }
    }, []);





    return (
        <div className="homePage min-h-screen w-full flex flex-col items-start justify-center dark:bg-[#1a1a1a]">
            {/* theme changing btn starts here */}
            <ThemeChangeBtn theme={theme} changeTheme={changeTheme} />
            {/* theme changing btn ends here */}


            {/* Home stuff starts here*/}


            <div className="w-full    flex flex-col justify-center items-center">
                <h3 style={{ fontFamily: "Lilita One " }} className='text-6xl '>Jira for fun :D</h3>
                <h3 style={{ fontFamily: "Poppins, sans-serif " }} className='text-xl mt-2 text-center w-[42rem] font-light'>I was bored, so I thought to learn next.js by creating this clone of Jira :)</h3>
            </div>

            <div className="flex flex-row justify-center items-center w-full mt-6"
            >
                <Link href={userExists ? '/dashboard' : '/sign-up'}>   <Button className='px-4 py-4 text-xl cursor-pointer' style={{ fontFamily: "Poppins, sans-serif" }} >Get Started</Button></Link>
            </div>


            {/* some cards or something where we show tasks and stuff */}

            {/* a long strip below  */}
            <div className="flex-row w-full h-20 dark:bg-gray-800 mt-40 bg-pink-200 overflow-hidden relative flex justify-center items-center">
                <div className="moving-text absolute whitespace-nowrap text-xl font-medium " style={{ fontFamily: "Poppins, sans-serif" }}>
                    Yeah, nothing much here coz I ain't practicing UI way too much as of now, but just learning more concepts of nextjs and stuff.
                </div>
            </div>
            <style jsx>{`
                .moving-text {
                    animation: moveRight 10s linear infinite;
                }
            
                @keyframes moveRight {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>


            {/* Home stuff ends here
            
            */}

        </div>
    );
}

export default HomePage;
