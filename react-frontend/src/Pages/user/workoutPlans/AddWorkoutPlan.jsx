import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../../components/UserNav";

export default function AddWorkoutPlan() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        routines: "",
        exercises: "",
        sets: "",
        repetitions: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        console.log(formData);
        // Reset form after submission if needed
        setFormData({
            title: "",
            description: "",
            routines: "",
            exercises: "",
            sets: "",
            repetitions: "",
        });
    };

    return (
        <>
            <UserNav />
            <div className="container mx-auto max-w-3xl mt-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold mb-4">Share Your Workout Plan</h1>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter title"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter description"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="routines" className="block text-gray-700 text-sm font-bold mb-2">
                                Routines
                            </label>
                            <textarea
                                id="routines"
                                name="routines"
                                value={formData.routines}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter routines"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="exercises" className="block text-gray-700 text-sm font-bold mb-2">
                                Exercises
                            </label>
                            <textarea
                                id="exercises"
                                name="exercises"
                                value={formData.exercises}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter exercises"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="sets" className="block text-gray-700 text-sm font-bold mb-2">
                                Sets
                            </label>
                            <textarea
                                id="sets"
                                name="sets"
                                value={formData.sets}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter sets"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="repetitions" className="block text-gray-700 text-sm font-bold mb-2">
                                Repetitions
                            </label>
                            <textarea
                                id="repetitions"
                                name="repetitions"
                                value={formData.repetitions}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter repetitions"
                                required
                            ></textarea>
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Share Workout Plan
                            </button>
                            <Link
                                to="/workoutplans/home"
                                className="ml-4 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
