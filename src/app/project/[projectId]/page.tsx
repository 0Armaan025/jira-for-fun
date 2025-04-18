"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { ThemeChangeBtn } from '@/components/theme-change-btn';
import Sidebar from '@/components/side-bar';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const ProjectPage = () => {
    const projectId = usePathname().split('/')[2];
    const { resolvedTheme, theme, setTheme } = useTheme();

    // Add near the top inside ProjectPage:
    const [backlogs, setBacklogs] = useState([
        { id: 1, title: 'Setup project structure' },
        { id: 2, title: 'Design UI mockups' },
    ]);

    const [newBacklog, setNewBacklog] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Add backlog
    const handleAddBacklog = () => {
        if (newBacklog.trim() === '') return;
        const nextId = backlogs.length ? Math.max(...backlogs.map(b => b.id)) + 1 : 1;
        setBacklogs([...backlogs, { id: nextId, title: newBacklog }]);
        setNewBacklog('');
    };

    // Delete backlog
    const handleDeleteBacklog = (id: number) => {
        setBacklogs(backlogs.filter(item => item.id !== id));
    };

    // Filtered Backlogs
    const filteredBacklogs = backlogs.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    const [chosenItem, setChosenItem] = useState('Backlog');
    const [projectName, setProjectName] = useState('Untitled Project');
    const [description, setDescription] = useState('This is a brief description of the project.');
    const [comments, setComments] = useState('');
    const [members, setMembers] = useState([
        { name: 'Armaan', initials: 'AR' },
        { name: 'Shadow', initials: 'SH' }
    ]);

    const createdOn = '2025-04-01';
    const lastModifiedOn = '2025-04-18';
    const lastModifiedBy = 'Armaan';

    const handleItemClick = (item: string) => setChosenItem(item);

    const changeTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <div className="projectPage min-h-screen">
            <ThemeChangeBtn changeTheme={changeTheme} theme={resolvedTheme || ""} />
            <div className="flex flex-row w-full min-h-screen">

                {/* Sidebar */}
                <Sidebar setChosenItem={handleItemClick} chosenItem={chosenItem} />

                {/* Main content */}
                <div className="content flex flex-row justify-between flex-grow">

                    <div className="innerContent flex flex-col flex-grow pr-4">


                        {chosenItem === "Backlog" && (
                            <>
                                <h3 className='text-3xl font-semibold mt-6 ml-8'>
                                    Backlog for Project: {projectId}
                                </h3>
                                <input
                                    type="search"
                                    placeholder="Search tasks"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="px-6 py-3 border border-gray-600 rounded-md ml-8 mt-4 w-80 dark:bg-zinc-800 dark:border-gray-400 dark:text-white"
                                />

                                <div className="mt-6 ml-8 space-y-3">
                                    {filteredBacklogs.map((item, idx) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between bg-white dark:bg-zinc-800 shadow-sm px-4 py-3 rounded-md border border-gray-300 dark:border-zinc-700 w-[90%]"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-gray-500 dark:text-gray-400 font-mono">{idx + 1}.</span>
                                                <span className="text-md font-medium text-gray-900 dark:text-white">{item.title}</span>
                                            </div>
                                            <button onClick={() => handleDeleteBacklog(item.id)} className="text-gray-500 hover:text-red-500 transition">
                                                ⋮
                                            </button>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}
                    </div>

                    {/* Right-side panel */}
                    <div className="project-info-panel w-[400px] min-w-[320px] max-w-[440px] p-4 border-l border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-zinc-900 text-black dark:text-white">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Project Name</label>
                            <input
                                type="text"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-gray-400 dark:border-gray-600 dark:bg-zinc-800"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-gray-400 dark:border-gray-600 dark:bg-zinc-800"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Members</label>
                            <div className="flex flex-wrap gap-2">
                                {members.map((member, index) => (
                                    <Avatar key={index} className="h-8 w-8">
                                        <AvatarFallback>{member.initials}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Notes</label>
                            <textarea
                                value={comments}
                                onChange={(e) => setComments(e.target.value)}
                                className="w-full px-3 py-2 rounded-md border border-gray-400 dark:border-gray-600 dark:bg-zinc-800"
                            />
                            <div className="mb-4 mt-6">
                                <label className="block text-sm font-medium mb-1">Add New Backlog</label>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newBacklog}
                                        onChange={(e) => setNewBacklog(e.target.value)}
                                        placeholder="Enter task name"
                                        className="flex-grow px-3 py-2 rounded-md border border-gray-400 dark:border-gray-600 dark:bg-zinc-800"
                                    />
                                </div>
                                <Button className='mt-4' onClick={handleAddBacklog}>Add</Button>
                            </div>

                        </div>

                        <div className="text-sm space-y-1 mt-4">
                            <p><strong>Created On:</strong> {createdOn}</p>
                            <p><strong>Last Modified:</strong> {lastModifiedOn}</p>
                            <p><strong>Modified By:</strong> {lastModifiedBy}</p>
                        </div>

                        <Button className='mt-4 cursor-pointer ' variant="destructive">Delete Project</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
