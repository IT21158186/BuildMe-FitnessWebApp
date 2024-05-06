import React from "react";
import { Link } from "react-router-dom";
import UserNav from "../../components/UserNav";
import StickyFooter from "../../components/Footer/StickyFooter";

export default function Home() {
    return (
        <>
            <UserNav />
            <div className="text-center text-3xl font-semibold my-4">You can browse as you prefer...</div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4 max-w-6xl mx-auto">
                    <Link to="/posts/home" className="w-full">
                        <div className="bg-blue-500 text-white py-12 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out h-full">
                            <img src="https://vawarelabs.com/wp-content/uploads/2021/08/Sabes-crear-el-post-perfecto-para-redes-sociales.jpeg" alt="Posts" className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">Current Updates</h2>
                            <p className="mt-2">Click here to see Current Updates</p>
                        </div>
                    </Link>
                    <Link to="/workoutPlans/home" className="w-full">
                        <div className="bg-yellow-500 text-white py-12 px-4 rounded-md cursor-pointer hover:bg-yellow-600 transition duration-300 ease-in-out h-full">
                            <img src="https://img.freepik.com/premium-vector/sport-couple-with-weights-heavy-equipment-sport-leisure_24877-64898.jpg" alt="Workout" className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">Workout Plans</h2>
                            <p className="mt-2">Click here to see Workout Plans</p>
                        </div>
                    </Link>
                    <Link to="/mealPlans/home" className="w-full">
                        <div className="bg-green-500 text-white py-12 px-4 rounded-md cursor-pointer hover:bg-green-600 transition duration-300 ease-in-out h-full">
                            <img src="https://gatheringdreams.com/wp-content/uploads/2019/03/healthy-meal-prep-2022-square.jpg" alt="Meal Plans" className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">Meal Plans</h2>
                            <p className="mt-2">Click here to see Meal Plans</p>
                        </div>
                    </Link>
                    <Link to="/workoutStatuses/home" className="w-full">
                        <div className="bg-yellow-500 text-white py-12 px-4 rounded-md cursor-pointer hover:bg-yellow-600 transition duration-300 ease-in-out h-full">
                            <img src="https://th.bing.com/th/id/R.a46590f7dd97f01f0b05531a3c5e503a?rik=LKpL9auQ5Cr%2fcA&pid=ImgRaw&r=0" alt="Workout" className="w-full h-48 object-cover mb-4" />
                            <h2 className="text-lg font-semibold">Current Workout Statuses</h2>
                            <p className="mt-2">Click here to see Current Workout Statuses</p>
                        </div>
                    </Link>
                </div>
            </div>
           
        </>
    );
}
