import React from 'react'
import { Button } from '@/components/ui/button';
import { ThemeChangeBtn } from '@/components/theme-change-btn';

type Props = {
    theme: string;
    changeTheme: () => void;
}

const HomePage = ({ theme, changeTheme }: Props) => {
    return (
        <div className="homePage min-h-screen flex flex-col items-start justify-start dark:bg-[#1a1a1a]">
            {/* theme changing btn starts here */}
            <ThemeChangeBtn theme={theme} changeTheme={changeTheme} />
            {/* theme changing btn ends here */}

            {/* Home Content */}
            <div className="mt-24 sm:mt-32 w-full ">
                <h3
                    className="text-center font-bold w-full text-shadow-2xl text-shadow-yellow dark:text-shadow-black flex justify-center items-center"
                    style={{ fontFamily: 'Lilita One' }}
                >
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl bg-gray-200 dark:bg-yellow-600 w-full py-4">
                        JIRA CLONE MADE FOR FUN
                    </span>
                </h3>

                <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center w-full mx-0 ">
                    <div className="w-full md:w-1/2 bg-pink-200 dark:bg-red-400 flex justify-center items-center h-28 sm:h-32 md:h-36 lg:h-40">
                        <h3
                            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center"
                            style={{ fontFamily: 'Lilita One' }}
                        >
                            PRODUCTIVITY MADE FUN & DON&apos;T
                        </h3>
                    </div>
                    <div className="w-full md:w-1/2 bg-pink-500 dark:bg-red-800 flex justify-center items-center h-28 sm:h-32 md:h-36 lg:h-40">
                        <h3
                            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-center"
                            style={{ fontFamily: 'Lilita One' }}
                        >
                            DON&apos;T USE AI TO CODE FOR GOOD&apos;S SAKE
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
