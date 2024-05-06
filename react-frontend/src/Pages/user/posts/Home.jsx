import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import UserNav from "../../../components/UserNav";
import { FaUserCircle, FaThumbsUp, FaComment, FaShare, FaHeart, FaLaugh, FaAngry, FaTimes } from 'react-icons/fa';

export default function PostsHome() {
    // Sample data for posts
    const [likedPosts, setLikedPosts] = useState([]);
    const [commentedPosts, setCommentedPosts] = useState({
        1: [
            { userName: "Alice", comment: "Great post!", reaction: null },
            { userName: "Bob", comment: "Interesting!", reaction: null },
            { userName: "Charlie", comment: "This is terrible!", reaction: null }
        ],
        2: [
            { userName: "Eve", comment: "Nice photo!", reaction: null },
            { userName: "Frank", comment: "Cool!", reaction: null },
            { userName: "Grace", comment: "Disgusting!", reaction: null }
        ]
    });
    const [commentInput, setCommentInput] = useState("");
    const [showCommentPopup, setShowCommentPopup] = useState(false);
    const [activePostId, setActivePostId] = useState(null);
    const [activeCommentIndex, setActiveCommentIndex] = useState(null);
    const [showShareConfirmation, setShowShareConfirmation] = useState(false);

    const handleLike = postId => {
        if (likedPosts.includes(postId)) {
            // If post is already liked, unlike it
            setLikedPosts(likedPosts.filter(id => id !== postId));
        } else {
            // If post is not liked, like it
            setLikedPosts([...likedPosts, postId]);
        }
    };

    const handleComment = postId => {
        setActivePostId(postId);
        setShowCommentPopup(true);
    };

    const handleReact = (reaction) => {
        if (activePostId !== null && activeCommentIndex !== null) {
            const updatedComments = { ...commentedPosts };
            updatedComments[activePostId][activeCommentIndex].reaction = reaction;
            setCommentedPosts(updatedComments);
        }
    };

    const handleCommentInputChange = event => {
        setCommentInput(event.target.value);
    };

    const handleCommentSubmit = () => {
        if (commentInput.trim() !== "") {
            const updatedComments = {
                ...commentedPosts,
                [activePostId]: commentedPosts[activePostId] ? [
                    ...commentedPosts[activePostId],
                    { userName: "You", comment: commentInput, reaction: null }
                ] : [{ userName: "You", comment: commentInput, reaction: null }]
            };
            setCommentedPosts(updatedComments);
            setCommentInput("");
        }
    };

    const handleCommentPopupClose = () => {
        setShowCommentPopup(false);
        setActivePostId(null);
        setActiveCommentIndex(null);
    };

    const handleShareConfirmation = () => {
        // Implement logic to share the post
        setShowShareConfirmation(false);
    };

    const isPostLiked = postId => likedPosts.includes(postId);

    const posts = [
        {
            id: 1,
            userName: "Deneth Pinsara",
            image: "https://cdn-bdilb.nitrocdn.com/HLQpTIIuNEYamdXTprwtltrexJwWJIMc/assets/images/optimized/rev-bbdcdde/www.finishedbasement.ca/wp-content/uploads/2023/09/basement_home_gym_ideas_1.webp",
            title: "My New Home Gym",
            description: "This is the newly build my Home gym. I used our old store room for this creation.",
            postedDateTime: "2024-05-06T15:30:00" // Format: YYYY-MM-DDTHH:MM:SS
        },
        {
            id: 2,
            userName: "Indudini Thennakoon",
            image: "https://xmerce.lk/assets/products/04-2023/20215cb77dff008b69451506b4b65983.jpg",
            title: "My new Sports Shoes",
            description: "This is my new sports shoes. Now I can do easily my cardios. It's so cool..",
            postedDateTime: "2024-05-06T12:00:00" // Format: YYYY-MM-DDTHH:MM:SS
        },
    ];

    return (
        <>
            <UserNav />

            <div className="flex justify-end mb-4" style={{ marginTop: '10px', marginRight: '20px' }}>
                <Link to="/posts/addPost" className="bg-blue-500 text-white rounded-md px-4 py-2 mr-4">
                    Share new
                </Link>
            </div>

            <div className="max-w-2xl mx-auto mt-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Posts and Current Updates</h1>
                {posts.map(post => (
                    <div key={post.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden relative" style={{ padding: '12px', margin: '8px' }}>
                        <div className="px-6 py-4">
                            <div className="flex items-center mb-2">
                                <FaUserCircle className="text-blue-500 mr-2" /> {/* Avatar Icon */}
                                <p className="text-gray-700 font-semibold">{post.userName}</p>
                            </div>
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                        </div>
                        <img src={post.image} alt="Post" className="w-full" />
                        <div className="px-6 py-4">
                            <p className="text-gray-700">{post.description}</p>
                            <p className="text-gray-500 text-sm mt-4 text-right absolute top-0 right-0" style={{ marginRight: '20px' }}>
                                {new Date(post.postedDateTime).toLocaleString()}
                            </p>
                        </div>
                        <div className="flex justify-center mt-4">
                            <button className={`text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg ${isPostLiked(post.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => handleLike(post.id)}><FaThumbsUp className="mr-1" />Like</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 mr-4 rounded-lg bg-gray-200" onClick={() => handleComment(post.id)}><FaComment className="mr-1" />Comment</button>
                            <button className="text-gray-500 flex items-center px-6 py-2 rounded-lg bg-gray-200" onClick={() => setShowShareConfirmation(true)}><FaShare className="mr-1" />Share</button>
                        </div>
                        {showCommentPopup && activePostId === post.id && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                                <div className="bg-white rounded-lg p-4 w-96">
                                    <div className="flex justify-end">
                                        <button className="text-gray-700 cursor-pointer" onClick={handleCommentPopupClose}><FaTimes /></button>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-4">Comments</h3>
                                    {commentedPosts[activePostId] &&
                                        commentedPosts[activePostId].map((comment, index) => (
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
                                    <p>Are you sure you want to share this post?</p>
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
