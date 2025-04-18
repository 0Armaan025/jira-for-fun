import { ClipboardList, ListChecksIcon, CalendarDays } from "lucide-react";
import { useState } from "react";

interface SideBarProps {
    chosenItem: string;
    setChosenItem: (item: string) => void;
}

export default function Sidebar({ chosenItem, setChosenItem }: SideBarProps) {

    const [myItem, setMyItem] = useState('Backlog');

    return (
        <div className="w-72 flex flex-col bg-gray-50 min-h-screen shadow-lg dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
            <div className="p-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project Name</h3>
            </div>

            <nav className="mt-2 flex-1">
                <div className="space-y-1 px-3">
                    <SidebarItem icon={<ClipboardList />} label="Backlog" onClick={() => setChosenItem("Backlog")} chosen={chosenItem == "Backlog"} />
                    <SidebarItem icon={<ListChecksIcon />} label="Tasks" onClick={() => setChosenItem("Tasks")} chosen={chosenItem == "Tasks"} />
                    <SidebarItem icon={<CalendarDays />} label="Calendar" onClick={() => setChosenItem("Calendar")} chosen={chosenItem == "Calendar"} />
                </div>
            </nav>


        </div>
    );
}

function SidebarItem({ icon, label, onClick, chosen }: any) {
    return (
        <div onClick={onClick} className={`flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/20 group transition-all duration-200 cursor-pointer ${chosen === true ? 'bg-blue-100 dark:bg-blue-900/20' : ''}`}>
            <div className="mr-3 text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400">
                {icon}
            </div>
            <span className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{label}</span>
        </div>
    );
}