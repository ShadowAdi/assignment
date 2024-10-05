import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import PostCard from "../components/PostCard";
import { Circles } from "react-loader-spinner";

const PostAll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllPosts = async () => {
    setLoading(true);
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <main className="flex bg-gray-200 text-black pb-4 flex-col w-full gap-8 px-4">
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
        <div className="grid gap-3 mx-auto sm:grid-cols-1 md:grid-cols-4 justify-center   ">
          {posts.map((post, i) => {
            return <PostCard key={i} post={post} />;
          })}
        </div>
      )}
    </main>
  );
};

export default PostAll;
