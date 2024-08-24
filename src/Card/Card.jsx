import React from 'react';

function Card({ todo, onEdit, onDelete }) {
    return (
        <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {todo.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {todo.description}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Category: {todo.category}
                </p>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        onClick={onEdit}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onDelete}
                        className="text-red-500 hover:text-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card;
