import React, { useState } from "react";
import Modal from "../../components/Modal.jsx";
import AdminNav from "../../components/AdminNav.jsx";

export default function AdminDashboard() {
    const currentUpdatesData = [
        { pId: 1, title: "Update 1", description: "Description 1", userName: "Indudini", 
          images: [
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLZAJELqbALwlv2VQzBbpYk-hw6kdbG08SehnOqXgjg&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLZAJELqbALwlv2VQzBbpYk-hw6kdbG08SehnOqXgjg&s"
          ], 
          postedDate: "2024-05-06", postedTime:"10:00:00" },
        { pId: 2, title: "Update 2", description: "Description 2", userName: "Shehela", 
          images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLZAJELqbALwlv2VQzBbpYk-hw6kdbG08SehnOqXgjg&s"], 
          postedDate: "2024-05-05", postedTime:"10:00:00" }
    ];

    const mealPlansData = [
        { userName: "Deneth", mId: 111, title: "Meal Plan 1", recipes: ["Recipe 1", "Recipe 2"], nutritionalInfo: "Nutritional Info 1", portionSize: "Portion Size 1" },
        { userName: "Oshadhi", mId: 112, title: "Meal Plan 2", recipes: ["Recipe 3", "Recipe 4"], nutritionalInfo: "Nutritional Info 2", portionSize: "Portion Size 2" }
    ];

    const workoutPlansData = [
        { userName: "John", wId: 211, title: "Workout Plan 1", routines: ["Routine 1", "Routine 2"], exercises: ["Exercise 1", "Exercise 2"], sets: 3, repetitions: 12 },
        { userName: "Doe", wId: 212, title: "Workout Plan 2", routines: ["Routine 3", "Routine 4"], exercises: ["Exercise 3", "Exercise 4"], sets: 4, repetitions: 10 }
    ];

    const workoutStatusUpdatesData = [
        { uId: 1, userName: "Alice", distance: "5 km", pushups: 50, weight: "50 kg" },
        { uId: 2, userName: "Bob", distance: "3 km", pushups: 30, weight: "60 kg" }
    ];

    const [modalData, setModalData] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleView = (data, dataType) => {
        setModalData({ data, dataType });
    };

    const handleDelete = (id, dataType) => {
        // Open confirmation popup
        setConfirmDelete({ id, dataType });
    };

    const confirmDeletion = () => {
        console.log(`Deleting item with id ${confirmDelete.id}`);
        // Delete item here (e.g., call API to delete)
        // After deletion, close confirmation popup
        setConfirmDelete(null);
    };

    const cancelDeletion = () => {
        // Close confirmation popup without deleting
        setConfirmDelete(null);
    };

    return (
        <>
            <AdminNav />
            <div className="p-4">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Manage Current Updates (Posts)</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Description</th>
                                <th className="border border-gray-300 p-2">User</th>
                                <th className="border border-gray-300 p-2">Images</th>
                                <th className="border border-gray-300 p-2">Posted Date</th>
                                <th className="border border-gray-300 p-2">Posted Time</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUpdatesData.map(item => (
                                <tr key={item.pId}>
                                    <td className="border border-gray-300 p-2 text-center">{item.title}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.description}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.userName}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        {item.images.length === 1 ? (
                                            <img src={item.images[0]} alt={`Image`} className="w-12 h-12 object-cover mx-auto" />
                                        ) : (
                                            <div className="flex">
                                                {item.images.map((image, index) => (
                                                    <img key={index} src={image} alt={`Image ${index + 1}`} className={`w-12 h-12 object-cover mx-auto ${index === 0 ? 'mr-2' : 'ml-2'}`} style={{ flex: "0 0 auto" }} />
                                                ))}
                                            </div>
                                        )}
                                    </td>
                                    <td className="border border-gray-300 p-2 text-center">{item.postedDate}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.postedTime}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleView(item, 'currentUpdates')}>View</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(item.pId, 'currentUpdates')}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Manage Meal Plans</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">User Name</th>
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Recipes</th>
                                <th className="border border-gray-300 p-2">Nutritional Info</th>
                                <th className="border border-gray-300 p-2">Portion Size</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mealPlansData.map(item => (
                                <tr key={item.mId}>
                                    <td className="border border-gray-300 p-2 text-center">{item.userName}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.title}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.recipes.join(', ')}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.nutritionalInfo}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.portionSize}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleView(item, 'mealPlans')}>View</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(item.mId, 'mealPlans')}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Manage Workout Plans</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">User Name</th>
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Routines</th>
                                <th className="border border-gray-300 p-2">Exercises</th>
                                <th className="border border-gray-300 p-2">Sets</th>
                                <th className="border border-gray-300 p-2">Repetitions</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workoutPlansData.map(item => (
                                <tr key={item.wId}>
                                    <td className="border border-gray-300 p-2 text-center">{item.userName}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.title}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.routines.join(', ')}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.exercises.join(', ')}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.sets}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.repetitions}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleView(item, 'workoutPlans')}>View</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(item.wId, 'workoutPlans')}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Manage Current Workout Status Updates</h2>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-2">User Name</th>
                                <th className="border border-gray-300 p-2">Distance Ran</th>
                                <th className="border border-gray-300 p-2">Pushups Completed</th>
                                <th className="border border-gray-300 p-2">Weight Lifted</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workoutStatusUpdatesData.map(item => (
                                <tr key={item.uId}>
                                    <td className="border border-gray-300 p-2 text-center">{item.userName}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.distance}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.pushups}</td>
                                    <td className="border border-gray-300 p-2 text-center">{item.weight}</td>
                                    <td className="border border-gray-300 p-2 text-center">
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => handleView(item, 'workoutStatusUpdates')}>View</button>
                                        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(item.uId, 'workoutStatusUpdates')}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {modalData && <Modal data={modalData.data} dataType={modalData.dataType} onClose={() => setModalData(null)} />}
                {/* Confirmation Popup */}
                {confirmDelete && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 rounded shadow-md">
                            <p className="text-lg mb-4">Are you sure you want to delete this {confirmDelete.dataType === 'currentUpdates' ? 'Update' : (confirmDelete.dataType === 'mealPlans' ? 'Meal Plan' : (confirmDelete.dataType === 'workoutPlans' ? 'Workout Plan' : 'Workout Status Update'))}?</p>
                            <div className="flex justify-center">
                                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={confirmDeletion}>Yes</button>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={cancelDeletion}>No</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
