import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../../components/UserNav";

export default function AddPost() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        mediaFiles: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const files = e.target.files;
        const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
        const maxFileSize = 1024 * 1024 * 30; // 30MB

        const filteredFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (allowedTypes.includes(file.type) && file.size <= maxFileSize) {
                filteredFiles.push(file);
            } else {
                alert(`File ${file.name} is not supported or exceeds the size limit.`);
            }
        }

        setFormData((prevFormData) => ({
            ...prevFormData,
            mediaFiles: filteredFiles,
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
            mediaFiles: [],
        });
    };

    return (
        <>
            <UserNav />
            <div className="container mx-auto max-w-md mt-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-2xl font-bold mb-4">Add and Share a Post</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
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
                        <div className="mb-4">
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
                        <div className="mb-4">
                            <label htmlFor="media" className="block text-gray-700 text-sm font-bold mb-2">
                                Upload Media (Up to 3 photos or videos, max 30 seconds each)
                            </label>
                            <input
                                type="file"
                                id="media"
                                name="media"
                                accept="image/jpeg, image/png, video/mp4"
                                multiple
                                onChange={handleFileChange}
                                className="block"
                                required
                            />
                        </div>
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Add Post
                            </button>
                            <Link
                                to="/posts/home"
                                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
