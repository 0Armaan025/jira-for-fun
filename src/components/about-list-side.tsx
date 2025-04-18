
import { useState } from "react";

const fieldNames = ["job title", "department", "organization", "location"];

export const AboutListSide = () => {
    const [editingField, setEditingField] = useState<number | null>(null);
    const [teams, setTeams] = useState<string[]>([]); // Stop using any[] bro 💀

    const handleSave = () => {
        setEditingField(null);
    };

    return (
        <div className="about-list-side relative mt-8 flex flex-col w-full max-w-md p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-gray-500 dark:text-gray-100 text-2xl font-semibold">About</h4>

            <div className="about-list flex flex-col mt-2">
                {fieldNames.map((field, index) => (
                    <div
                        key={index}
                        className="about-item flex items-center mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                        onClick={() => setEditingField(index)}
                    >
                        <span className="text-gray-700 text-lg dark:text-gray-200">
                            Your {field}
                        </span>
                    </div>
                ))}

                {editingField !== null && (
                    <div className="editField mt-2">
                        <input
                            type="text"
                            placeholder={`Enter your ${fieldNames[editingField]}`}
                            className="border border-gray-300 rounded-lg p-2 w-full"
                        />
                        <button
                            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-2"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                )}
            </div>

            <h4 className="text-gray-500 dark:text-gray-100 text-2xl font-semibold mt-4">Teams</h4>
            <div className="teams-list flex flex-col mt-2">
                {teams.length === 0 ? (
                    <div className="no-teams flex items-center mx-4 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                        <span className="text-gray-700 text-lg dark:text-gray-200">
                            + Create a team
                        </span>
                    </div>
                ) : (
                    teams.map((team, index) => (
                        <div key={index} className="team-item flex items-center mb-2 dark:hover:bg-gray-600">
                            <span className="text-gray-700 dark:text-gray-200 text-lg">{team}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
