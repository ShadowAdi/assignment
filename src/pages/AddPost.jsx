import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: id,
        title,
        body,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex bg-gray-200 text-black flex-col w-full gap-8 px-4">
      <Navbar />
      <section className="flex md:w-[60%] w-[90%] mt-4 mx-auto">
        <form onSubmit={submitForm} className="w-full mx-auto">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="title"
              id="title"
              value={title} // Bind input value to title state
              onChange={(e) => setTitle(e.target.value)} // Update state on change
              className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2
               border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0
                focus:border-blue-600 peer"
              placeholder="Title of Post"
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
               origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
               peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="body"
              id="body"
              value={body} // Bind input value to body state
              onChange={(e) => setBody(e.target.value)} // Update state on change
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0
               border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 
               focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Body of Post"
              required
            />
            <label
              htmlFor="body"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
              transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
              peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Body
            </label>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
             focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default AddPost;
 