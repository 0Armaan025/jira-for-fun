"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ThemeChangeBtn } from '@/components/theme-change-btn';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { AboutListSide } from '@/components/about-list-side';
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Clock,
    Calendar,
    Briefcase,
    Mail,

    Settings,
    Star,
    Activity,
    Archive
} from 'lucide-react';

type Props = {}

const Page = (props: Props) => {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const personId = usePathname().split("/").pop();

    const changeTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }


    const checkIfItsYou = () => {
        if (personId === "3412421341234") {
            return true;
        } else {
            return false;
        }
    }

    // Mock data for recent work items
    const recentWork = [
        { id: 'PROJ-123', title: 'Implement user authentication', status: 'In Progress', date: '2d ago' },
        { id: 'PROJ-118', title: 'Fix navigation responsiveness', status: 'Done', date: '3d ago' },
        { id: 'PROJ-105', title: 'Update documentation', status: 'Review', date: '5d ago' }
    ];

    // Mock data for projects
    const projects = [
        { name: 'Website Redesign', id: 'WR', color: 'blue' },
        { name: 'Mobile App', id: 'MA', color: 'green' },
        { name: 'Analytics Dashboard', id: 'AD', color: 'purple' }
    ];


    const [showProjects, setShowProjects] = useState(false);

    return (
        <div className="min-h-screen w-full flex flex-col bg-gray-50 dark:bg-gray-900">
            {/* Header navigation - Jira style */}

            <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />

            <div className="flex flex-col md:flex-row w-full">
                {/* Left sidebar - Jira style */}
                <aside className="w-full md:w-64 lg:w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
                    <div className="flex flex-col items-center py-4">
                        <Avatar className="h-24 w-24 rounded-full border-2 border-gray-200 dark:border-gray-700">
                            <AvatarImage src="https://secure.gravatar.com/avatar/7f8b99575d9f2a0506cc9dfc96667312?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-3.png" />
                            <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">AR</AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl font-medium mt-4">Armaan 6TH E 01</h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Software Developer</p>

                        <div className="flex gap-2 mt-3">

                            {!checkIfItsYou() ? (
                                <>
                                    <Button variant="outline" size="sm" className="text-gray-600 dark:text-gray-300">
                                        <Mail className="w-4 h-4 mr-1" />
                                        Message
                                    </Button>
                                </>
                            ) : null}

                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                <Settings className="w-4 h-4 mr-1" />
                                Edit
                            </Button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">About</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">armaan@example.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">Pacific Time (US & Canada)</span>
                            </div>
                            <div className="flex items-center gap-2">

                                <span className="text-sm">@armaan-dev</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-gray-500" />
                                <span className="text-sm">Joined January 2023</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6" >
                        <AboutListSide />
                    </div>
                </aside>

                {/* Main content area - Jira style */}
                <main className="flex-1 p-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-medium">All tasks</h2>
                            <Link href="#" className="text-blue-500 dark:text-blue-400 text-sm hover:underline">View all tasks</Link>
                        </div>

                        <div className="space-y-3">
                            {recentWork.map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded">
                                            {item.id}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium">{item.title}</h3>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                                        </div>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded ${item.status === 'Done'
                                        ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200'
                                        : item.status === 'Review'
                                            ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200'
                                            : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-medium">Projects</h2>
                                <Dialog>
                                    <DialogTrigger className="text-blue-500 hover:underline dark:text-blue-400">
                                        View all
                                    </DialogTrigger>
                                    <DialogContent className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg">
                                        <DialogHeader>
                                            <DialogTitle className="text-lg font-semibold">Projects</DialogTitle>
                                            <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
                                                Below is a list of projects and their members.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4 mt-4">
                                            {projects.map((project) => (
                                                <div
                                                    key={project.id}
                                                    className="flex items-center gap-4 p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium">{project.name}</span>
                                                        <div className="flex -space-x-2 mt-2">
                                                            {[1, 2, 3].map((member) => (
                                                                <Avatar
                                                                    key={member}
                                                                    className="h-8 w-8 border-2 border-white dark:border-gray-800"
                                                                >
                                                                    <AvatarImage
                                                                        src={`https://i.pravatar.cc/150?img=${member}`}
                                                                    />
                                                                    <AvatarFallback className="bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                                                        {member}
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>

                            <div className="space-y-3">
                                {projects.map((project) => (
                                    <div key={project.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                                        <div className={`w-8 h-8 rounded flex items-center justify-center ${project.color === 'blue'
                                            ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200'
                                            : project.color === 'green'
                                                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200'
                                                : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200'
                                            }`}>
                                            {project.id}
                                        </div>
                                        <span className="text-sm font-medium">{project.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>





                </main>
            </div>
        </div>
    );
};

export default Page;