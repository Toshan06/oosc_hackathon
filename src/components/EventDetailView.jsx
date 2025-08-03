import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const EventDetailView = ({ event, onClose }) => {
  if (!event) return null;
  const [comments, setComments] = useState(event.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleComments = () => {
    if (newComment.trim() === "") return;

    const entry = {
      user: `Guest_User_${Math.floor(Math.random() * 100000)}`,
      text: newComment,
    };

    setComments((prev) => [...prev, entry]);
    setNewComment("");
  };

  return (
    <div className="fixed inset-0 z-40 bg-blue-300/30 backdrop-blur bg-opacity-40 flex justify-center items-start pt-16 overflow-y-auto">
      <div className="relative text-black w-full max-w-5xl rounded-md bg-white p-6 shadow-xl ring-2 ring-inset ring-blue-300 gap-2 transition">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 hover:scale-125 text-xl"
        >
          <RxCross2 />
        </button>
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2 font-serif text-center">
          {event.title}
        </h2>
        <p className="text-md text-gray-700 mb-4 ml-6">
          {event.datetime} | Hosted by {event.host}
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[event.image, ...(event.images || [])].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="event pic"
              className="rounded-lg object-cover h-40 w-80 ml-6"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-black mb-4 ml-6">
          {event.description ||
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."}
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Participants</h3>
          <ul className="text-xl font-extrabold text-gray-600">
            {event.participants}
          </ul>
        </div>

        {/*Comments*/}
        <div>
          <h3 className="text-lg font-semibold ">Comments</h3>
          <div className="mt-2 flex gap-2 mb-3 outline-none">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-grow px-3 py-2 border rounded"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleComments}
            >
              Post
            </button>
          </div>

          <div className="space-y-2 text-sm max-h-52 overflow-y-auto">
            {comments.length > 0 ? (
              comments.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 p-2 rounded border border-gray-200"
                >
                  <p className="font-medium">{c.user}</p>
                  <p>{c.text}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet.</p>
            )}
          </div>

          <div className="flex items-center justify-center mt-3 mb-1">
            <button className="bg-emerald-300 rounded-md px-4 py-2 font-bold font-serif hover:shadow-md hover:shadow-emerald-400/40 hover:scale-105 hover:text-blue-700">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailView;
