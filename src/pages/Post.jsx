import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import Comment from "../components/Comment";
import { Circles } from "react-loader-spinner";

const Post = () => {
  const [post, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to capture errors

  const GetPost = async () => {
    setLoading(true);
    setError(null); // Reset error state before starting the request
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      setPostData(res.data);
    } catch (err) {
      setError("Failed to fetch the post"); // Set error message
      console.error(err);
    } finally {
      setLoading(false); // Ensure this runs after success or error
    }
  };

  const GetPostComments = async () => {
    setLoading(true);
    setError(null); // Reset error state before starting the request
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"
      );
      setComments(res.data);
    } catch (err) {
      setError("Failed to fetch comments"); // Set error message
      console.error(err);
    } finally {
      setLoading(false); // Ensure this runs after success or error
    }
  };

  useEffect(() => {
    if (postId) {
      GetPost();
      GetPostComments();
    }
  }, [postId]);

  return (
    <main className="flex text-black flex-col w-full">
      <Navbar />

      {loading ? (
        <div className="container mx-auto p-4">
          <Circles
            height="80"
            width="80"
            color="#000"
            ariaLabel="loading"
            visible={loading}
          />
        </div>
      ) : error ? (
        // Display error message if an error occurred
        <div className="container mx-auto p-4">
          <h3 className="text-red-500">{error}</h3>
        </div>
      ) : (
        <div className="container mx-auto p-4">
          {post && (
            <>
              <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
              <p>{post.body}</p>
            </>
          )}
          <hr className="border-b border-b-stone-950 my-4" />
          <h2 className="text-xl font-bold mt-4">Comments</h2>
          {comments?.length > 0 ? (
            comments.map((comment, i) => (
              <Comment comment={comment} key={i} />
            ))
          ) : (
            <h6 className="text-base font-semibold text-left ">
              No Comments Found
            </h6>
          )}
        </div>
      )}
    </main>
  );
};

export default Post;
