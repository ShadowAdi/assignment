import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="w-full mt-2 md:p-6 p-2  border border-slate-800 rounded-lg shadow ">
      <div className="flex gap-0 mb-4 items-start flex-col">
        <h5 className="mb-2 text-base font-semibold tracking-tight text-black">
          {comment?.name}
        </h5>
        <span className="text-gray-600 text-base ">{comment?.email}</span>
      </div>
      <p className="mb-3 font-normal text-stone-950">{comment?.body}</p>
    </div>
  );
};

export default Comment;
