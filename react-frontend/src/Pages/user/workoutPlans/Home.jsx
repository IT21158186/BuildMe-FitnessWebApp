import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../../components/UserNav";
import { FaUserCircle, FaThumbsUp, FaComment, FaShare, FaHeart, FaLaugh, FaAngry, FaTimes } from 'react-icons/fa';

export default function WorkoutPlansHome() {
    const [likedWorkoutPlans, setLikedWorkoutPlans] = useState([]);
    const [commentedWorkoutPlans, setCommentedWorkoutPlans] = useState({});
    const [commentInput, setCommentInput] = useState("");
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [activeWorkoutPlanId, setActiveWorkoutPlanId] = useState(null);
    const [activeCommentIndex, setActiveCommentIndex] = useState(null);
    const [showShareConfirmation, setShowShareConfirmation] = useState(false);

    const handleLike = workoutPlanId => {
        if (likedWorkoutPlans.includes(workoutPlanId)) {
            setLikedWorkoutPlans(likedWorkoutPlans.filter(id => id !== workoutPlanId));
        } else {
            setLikedWorkoutPlans([...likedWorkoutPlans, workoutPlanId]);
        }
    };

    const handleComment = workoutPlanId => {
        setActiveWorkoutPlanId(workoutPlanId);
        setShowCommentPopup(true);
    };

    const handleReact = (reaction) => {
        if (activeWorkoutPlanId !== null && activeCommentIndex !== null) {
            const updatedComments = { ...commentedWorkoutPlans };
            updatedComments[activeWorkoutPlanId][activeCommentIndex].reaction = reaction;
            setCommentedWorkoutPlans(updatedComments);
        }
    };

    const handleCommentInputChange = event => {
        setCommentInput(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (commentInput.trim() !== "") {
            const updatedComments = {
                ...commentedWorkoutPlans,
                [activeWorkoutPlanId]: commentedWorkoutPlans[activeWorkoutPlanId] ? [
                    ...commentedWorkoutPlans[activeWorkoutPlanId],
                    { userName: "You", comment: commentInput, reaction: null }
                ] : [{ userName: "You", comment: commentInput, reaction: null }]
            };
            setCommentedWorkoutPlans(updatedComments);
            setCommentInput("");
        }
    };

    const handleCommentPopupClose = () => {
        setShowCommentPopup(false);
        setActiveWorkoutPlanId(null);
        setActiveCommentIndex(null);
    };

    const handleShareConfirmation = () => {
        setShowShareConfirmation(false);
    };

    const isWorkoutPlanLiked = workoutPlanId => likedWorkoutPlans.includes(workoutPlanId);

    const workoutPlans = [
        {
            id: 1,
            userName: "Fitness Guru",
            title: "Morning Workout Routine",
            routines: [
                { name: "Warm-up", exercises: ["Jumping Jacks", "High Knees", "Arm Circles"], sets: 1, repetitions: "15 each" },
                { name: "Strength Training", exercises: ["Squats", "Push-ups", "Planks"], sets: 3, repetitions: "10-12" },
                { name: "Cool-down", exercises: ["Stretching", "Deep Breathing"], sets: 1, repetitions: "5 minutes" }
            ],
            postedDateTime: "2024-05-06T08:00:00"
        },
        {
            id: 2,
            userName: "Fitness Enthusiast",
            title: "Full Body Workout",
            routines: [
                { name: "Warm-up", exercises: ["Jump Rope", "Leg Swings", "Arm Rotations"], sets: 1, repetitions: "10 each" },
                { name: "Cardio", exercises: ["Running", "Cycling", "Rowing"], sets: 1, repetitions: "20 minutes" },
                { name: "Strength Training", exercises: ["Deadlifts", "Bench Press", "Pull-ups"], sets: 4, repetitions: "8-10" },
                { name: "Cooldown", exercises: ["Foam Rolling", "Static Stretching"], sets: 1, repetitions: "10 minutes" }
            ],
            postedDateTime: "2024-05-05T18:00:00"
        }
    ];

    return (
        <>
            <UserNav />

            <div className="flex justify-end mb-4" style={{ marginTop: '10px', marginRight: '20px' }}>
                <Link to="/workoutplans/addWorkoutPlan" className="bg-blue-500 text-white rounded-md px-4 py-2 mr-4">
                    Share new
                </Link>
            </div>

            <div className="max-w-2xl mx-auto mt-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Workout Plans</h1>
                {workoutPlans.map(workoutPlan => (
                    <div key={workoutPlan.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden relative" style={{ padding: '12px', margin: '16px' }}>
                        <div className="px-6 py-4">
                            <div className="flex items-center mb-2">
                                <FaUserCircle className="text-blue-500 mr-2" />
                                <p className="text-gray-700 font-semibold">{workoutPlan.userName}</p>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{workoutPlan.title}</h2>
                        </div>
                        <div className="px-6 py-4">
                            {workoutPlan.routines.map((routine, index) => (
                                <div key={index} className="mb-2">
                                    <p className="text-gray-700"><strong>{routine.name}:</strong> {routine.exercises.join(', ')}</p>
                                    <p className="text-gray-700"><strong>Sets:</strong> {routine.sets}, <strong>Repetitions:</strong> {routine.repetitions}</p>
                                </div>
                            ))}
                            <p className="text-gray-500 text-sm mt-4 text-right absolute top-0 right-0" style={{ marginRight: '20px' }}>
                                {new Date(workoutPlan.postedDateTime).toLocaleString()}
                            </p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className={`text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg ${isWorkoutPlanLiked(workoutPlan.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleLike(workoutPlan.id)}><FaThumbsUp className="mr-1" />Like</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg bg-gray-200" onClick={() => handleComment(workoutPlan.id)}><FaComment className="mr-1" />Comment</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 rounded-lg bg-gray-200" onClick={() => setShowShareConfirmation(true)}><FaShare className="mr-1" />Share</button>
                        </div>
                        {showCommentPopup && activeWorkoutPlanId === workoutPlan.id && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg p-4 w-96">
                                    <div className="flex justify-end">
                                        <button className="text-gray-700 cursor-pointer" onClick={handleCommentPopupClose}><FaTimes /></button>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-4">Comments</h3>
                                    {commentedWorkoutPlans[activeWorkoutPlanId] &&
                                        commentedWorkoutPlans[activeWorkoutPlanId].map((comment, index) => (
                                            <div key={index} className="flex items-center justify-between mb-2">
                                                <div className="flex items-center">
                                                    <FaUserCircle className="text-blue-500 mr-2" />
                                                    <p className="text-gray-700 font-semibold">{comment.userName}</p>
                                                    <p className="text-gray-700 ml-2">{comment.comment}</p>
                                                </div>
                                                <div>
                                                    {activeCommentIndex === index ? (
                                                        <div className="flex items-center">
                                                            <FaHeart className="text-red-500 cursor-pointer mr-2" onClick={() => handleReact("heart")} />
                                                            <FaLaugh className="text-yellow-500 cursor-pointer mr-2" onClick={() => handleReact("laugh")} />
                                                            <FaAngry className="text-red-500 cursor-pointer mr-2" onClick={() => handleReact("angry")} />
                                                        </div>
                                                    ) : (
                                                        <FaThumbsUp className="cursor-pointer" onClick={() => setActiveCommentIndex(index)} />
                                                    )}
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <input type="text" className="border border-gray-300 rounded-md w-full px-3 py-2 mb-2" placeholder="Write a comment..." value={commentInput} onChange={handleCommentInputChange} />
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2" onClick={handleCommentSubmit}>Send</button>
                                </div>
                            </div>
                        )}
                        {showShareConfirmation && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg p-4 w-96">
                                    <h3 className="text-lg font-semibold mb-4">Confirm Share</h3>
                                    <p>Are you sure you want to share this workout plan?</p>
                                    <div className="flex justify-end mt-4">
                                        <button className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2" onClick={handleShareConfirmation}>Share</button>
                                        <button className="bg-gray-300 text-gray-700 rounded-md px-4 py-2" onClick={() => setShowShareConfirmation(false)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}
