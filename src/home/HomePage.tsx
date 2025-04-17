"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ThemeChangeBtn } from '@/components/theme-change-btn';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Calendar } from 'lucide-react';
import { useTheme } from 'next-themes';



const HomePage = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    const [userExists, setUserExists] = useState(false);

    const { resolvedTheme, theme, setTheme } = useTheme();



    const changeTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    useEffect(() => {
        if (!isLoaded || !isSignedIn) {
            setUserExists(false);
        } else {
            setUserExists(true);
        }
    }, [isLoaded, isSignedIn]);

    const features = [
        {
            title: "Task Management",
            description: "Create, organize, and track your tasks with ease",
            icon: <CheckCircle className="h-8 w-8 text-blue-500" />
        },
        {
            title: "Time Tracking",
            description: "Monitor the time spent on each task or project",
            icon: <Clock className="h-8 w-8 text-green-500" />
        },
        {
            title: "Calendar View",
            description: "Visualize your project timeline and deadlines",
            icon: <Calendar className="h-8 w-8 text-purple-500" />
        }
    ];

    return (
        <div className="min-h-screen w-full flex flex-col relative dark:bg-gray-900 bg-gray-50 transition-colors duration-300">
            {/* Navigation bar */}
            <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />


            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-20 flex flex-col items-center text-center">
                <h1 style={{ fontFamily: "Lilita One" }} className="text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jira for Fun :D</h1>
                <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300 mb-8">
                    A personal project built to learn Next.js while creating something useful. Task management doesn't have to be boring!
                </p>
                <Link href={userExists ? '/dashboard' : '/sign-up'}>
                    <Button size="lg" className="text-lg px-8 py-6 rounded-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                        Get Started <ArrowRight className="h-5 w-5" />
                    </Button>
                </Link>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100 dark:bg-gray-800">
                <h2 style={{ fontFamily: "Lilita One" }} className="text-3xl md:text-4xl text-center mb-12">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 style={{ fontFamily: "Poppins, sans-serif" }} className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20">
                <h2 style={{ fontFamily: "Lilita One" }} className="text-3xl md:text-4xl text-center mb-8">Built With</h2>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full">Next.js</div>
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full">TypeScript</div>
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full">Tailwind CSS</div>
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full">Clerk Auth</div>
                    <div className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-full">Shadcn UI</div>
                </div>
            </section>

            {/* Footer Banner */}
            <div className="w-full py-6 flex flex-row justify-center items-center bg-gray-700 overflow-hidden relative">
                <div className="moving-text absolute whitespace-nowrap text-white text-lg font-medium" style={{ fontFamily: "Poppins, sans-serif" }}>
                    This is a learning project to explore Next.js concepts, Clerk authentication, and responsive design • Not affiliated with Atlassian Jira
                </div>
            </div>

            {/* Footer */}


            <style jsx>{`
        .moving-text {
          animation: moveRight 20s linear infinite;
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
        </div>
    );
};

export default HomePage;