interface themeBtnProps {
    theme: string;

    changeTheme: () => void;
}

export const ThemeChangeBtn = ({ theme, changeTheme }: themeBtnProps) => {

    const isDark = theme === "dark";

    return (
        <>
            <div className="fixed bottom-[5%] left-[92%] flex justify-center items-center bg-gray-700 color-white dark:color-black dark:bg-gray-200  rounded-full p-2 cursor-pointer transition-all hover:scale-105" onClick={changeTheme}>
                {!isDark ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon text-white"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun-icon lucide-sun text-black"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg></>
                )}
            </div>
        </>
    );
}