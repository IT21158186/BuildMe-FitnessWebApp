import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserNav from "../../../components/UserNav";
import { FaUserCircle, FaThumbsUp, FaComment, FaShare, FaHeart, FaLaugh, FaAngry, FaTimes } from 'react-icons/fa';

export default function WorkoutStatusesHome() {
    const [likedWorkoutStatuses, setLikedWorkoutStatuses] = useState([]);
    const [commentedWorkoutStatuses, setCommentedWorkoutStatuses] = useState({});
    const [commentInput, setCommentInput] = useState("");
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [activeWorkoutStatusId, setActiveWorkoutStatusId] = useState(null);
    const [activeCommentIndex, setActiveCommentIndex] = useState(null);
    const [showShareConfirmation, setShowShareConfirmation] = useState(false);

    const handleLike = workoutStatusId => {
        if (likedWorkoutStatuses.includes(workoutStatusId)) {
            setLikedWorkoutStatuses(likedWorkoutStatuses.filter(id => id !== workoutStatusId));
        } else {
            setLikedWorkoutStatuses([...likedWorkoutStatuses, workoutStatusId]);
        }
    };

    const handleComment = workoutStatusId => {
        setActiveWorkoutStatusId(workoutStatusId);
        setShowCommentPopup(true);
    };

    const handleReact = (reaction) => {
        if (activeWorkoutStatusId !== null && activeCommentIndex !== null) {
            const updatedComments = { ...commentedWorkoutStatuses };
            updatedComments[activeWorkoutStatusId][activeCommentIndex].reaction = reaction;
            setCommentedWorkoutStatuses(updatedComments);
        }
    };

    const handleCommentInputChange = event => {
        setCommentInput(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (commentInput.trim() !== "") {
            const updatedComments = {
                ...commentedWorkoutStatuses,
                [activeWorkoutStatusId]: commentedWorkoutStatuses[activeWorkoutStatusId] ? [
                    ...commentedWorkoutStatuses[activeWorkoutStatusId],
                    { userName: "You", comment: commentInput, reaction: null }
                ] : [{ userName: "You", comment: commentInput, reaction: null }]
            };
            setCommentedWorkoutStatuses(updatedComments);
            setCommentInput("");
        }
    };

    const handleCommentPopupClose = () => {
        setShowCommentPopup(false);
        setActiveWorkoutStatusId(null);
        setActiveCommentIndex(null);
    };

    const handleShareConfirmation = () => {
        setShowShareConfirmation(false);
    };

    const isWorkoutStatusLiked = workoutStatusId => likedWorkoutStatuses.includes(workoutStatusId);

    const workoutStatuses = [
        {
            id: 1,
            userName: "Fitness Guru",
            status: "Ran 5 miles and done 25 Push-ups",
            postedDateTime: "2024-05-06T08:00:00"
        },
        {
            id: 2,
            userName: "Fitness Enthusiast",
            status: "Completed 100 push-ups",
            postedDateTime: "2024-05-05T18:00:00"
        }
    ];

    return (
        <>
            <UserNav />

            <div className="flex justify-end mb-4" style={{ marginTop: '10px', marginRight: '20px' }}>
                <Link to="/workoutstatuses/addWorkoutStatus" className="bg-blue-500 text-white rounded-md px-4 py-2 mr-4">
                    Share new
                </Link>
            </div>

            <div className="max-w-2xl mx-auto mt-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Workout Statuses</h1>
                {workoutStatuses.map(workoutStatus => (
                    <div key={workoutStatus.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden relative" style={{ padding: '12px', margin: '16px' }}>
                        <div className="px-6 py-4">
                            <div className="flex items-center mb-2">
                                <FaUserCircle className="text-blue-500 mr-2" />
                                <p className="text-gray-700 font-semibold">{workoutStatus.userName}</p>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{workoutStatus.status}</h2>
                        </div>
                        <div className="px-6 py-4">
                            <p className="text-gray-500 text-sm mt-4 text-right absolute top-0 right-0" style={{ marginRight: '20px' }}>
                                {new Date(workoutStatus.postedDateTime).toLocaleString()}
                            </p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className={`text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg ${isWorkoutStatusLiked(workoutStatus.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleLike(workoutStatus.id)}><FaThumbsUp className="mr-1" />Like</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg bg-gray-200" onClick={() => handleComment(workoutStatus.id)}><FaComment className="mr-1" />Comment</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 rounded-lg bg-gray-200" onClick={() => setShowShareConfirmation(true)}><FaShare className="mr-1" />Share</button>
                        </div>
                        {showCommentPopup && activeWorkoutStatusId === workoutStatus.id && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg p-4 w-96">
                                    <div className="flex justify-end">
                                        <button className="text-gray-700 cursor-pointer" onClick={handleCommentPopupClose}><FaTimes /></button>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-4">Comments</h3>
                                    {commentedWorkoutStatuses[activeWorkoutStatusId] &&
                                        commentedWorkoutStatuses[activeWorkoutStatusId].map((comment, index) => (
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
                                    <p>Are you sure you want to share this workout status?</p>
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
