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
  const GetPost = async () => {
    setLoading(true);

    await axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  const GetPostComments = async () => {
    setLoading(true);

    await axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };
  useEffect(() => {
    if (postId) {
      GetPost();
      GetPostComments();
    }
  }, [postId]);

  return (
    <main className="flex bg-gray-200 text-black flex-col w-full">
      <Navbar />

      {loading ? (
        <div className="container mx-auto p-4">
          {
            <Circles
              height="80"
              width="80"
              color="#000"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={loading}
            />
          }
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
            comments?.map((comment, i) => {
              return <Comment comment={comment} key={i} />;
            })
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
