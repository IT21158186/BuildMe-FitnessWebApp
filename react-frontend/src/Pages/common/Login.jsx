import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../../components/UserNav";

export default function Login() {
    const handleLogin = () => {
        // Perform login logic here

        // Redirect to '/home' after successful login
        window.location.href = "/";
    };

    return (
        <>
            <UserNav />
            <div className="flex justify-center items-start min-h-screen bg-gray-100 overflow-hidden">
                <div className="container mx-auto max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full mt-8">
                        <h1 className="text-2xl font-bold mb-4">Login</h1>
                        <form className="mb-4">
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <p className="text-red-500 text-xs italic">Please fill both username and password for login.</p>
                            </div>
                            <Link to="/">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleLogin} // Call handleLogin function on button click
                                >
                                    Sign In
                                </button>
                            </Link>
                            <Link to="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                Create an account
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
