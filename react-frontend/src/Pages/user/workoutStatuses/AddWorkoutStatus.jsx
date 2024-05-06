import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../../components/UserNav";

export default function AddWorkoutStatus() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        distance: "",
        pushups: "",
        weight: "",
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
            distance: "",
            pushups: "",
            weight: "",
        });
    };

    return (
        <>
            <UserNav />
            <div className="container mx-auto max-w-3xl mt-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold mb-4">Share Your Workout Status</h1>
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
                            <label htmlFor="distance" className="block text-gray-700 text-sm font-bold mb-2">
                                Distance (in miles)
                            </label>
                            <input
                                type="text"
                                id="distance"
                                name="distance"
                                value={formData.distance}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter distance"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="pushups" className="block text-gray-700 text-sm font-bold mb-2">
                                Pushups
                            </label>
                            <input
                                type="text"
                                id="pushups"
                                name="pushups"
                                value={formData.pushups}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter pushups count"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
                                Weight Lifted (in lbs)
                            </label>
                            <input
                                type="text"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter weight lifted"
                                required
                            />
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Share Workout Status
                            </button>
                            <Link
                                to="/workoutStatuses/home"
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
