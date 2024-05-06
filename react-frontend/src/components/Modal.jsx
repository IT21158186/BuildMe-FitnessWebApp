import React from "react";

export default function Modal({ data, onClose, dataType }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-12 rounded-lg shadow-lg max-w-lg">
                <div className="flex justify-end">
                    <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="text-center">
                    {dataType === 'currentUpdates' && (
                        <>
                            <Carousel images={data.images} />
                            <h2 className="text-2xl font-semibold mt-6">{data.title}</h2>
                            <p className="text-gray-600">{data.description}</p>
                            <p className="text-gray-600">User: {data.userName}</p>
                            <p className="text-gray-600">Posted Date & Time: {data.postedDate} {data.postedTime}</p>
                        </>
                    )}
                    {dataType === 'mealPlans' && (
                        <>
                            <h2 className="text-2xl font-semibold mt-6">{data.title}</h2>
                            <p className="text-gray-600">Recipes: {data.recipes.join(', ')}</p>
                            <p className="text-gray-600">Nutritional Info: {data.nutritionalInfo}</p>
                            <p className="text-gray-600">Portion Size: {data.portionSize}</p>
                        </>
                    )}
                    {dataType === 'workoutPlans' && (
                        <>
                            <h2 className="text-2xl font-semibold mt-6">{data.title}</h2>
                            <p className="text-gray-600">Routines: {data.routines.join(', ')}</p>
                            <p className="text-gray-600">Exercises: {data.exercises.join(', ')}</p>
                            <p className="text-gray-600">Sets: {data.sets}</p>
                            <p className="text-gray-600">Repetitions: {data.repetitions}</p>
                        </>
                    )}
                    {dataType === 'workoutStatusUpdates' && (
                        <>
                            <h2 className="text-2xl font-semibold mt-6">{data.userName}'s Workout Status Update</h2>
                            <p className="text-gray-600">Distance Ran: {data.distance}</p>
                            <p className="text-gray-600">Pushups Completed: {data.pushups}</p>
                            <p className="text-gray-600">Weight Lifted: {data.weight}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
