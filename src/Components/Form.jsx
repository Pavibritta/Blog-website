import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Form = ({ onClose, blogdata, setBlogData }) => {
  const initialData = {
    id: "",
    title: "",
    slug: "",
    description: "",
    content: "",
  };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const newBlog = {
      ...formData,
      id: blogdata.length ? blogdata[blogdata.length - 1].id + 1 : 1,
    };
    setBlogData((prev) => [...prev, newBlog]);
    setFormData(initialData);
    onClose();
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <section className="bg-white w-full max-w-lg p-6 rounded-xl shadow-lg relative">
          <MdOutlineClose
            className=" absolute top-2 right-2 text-xl cursor-pointer"
            onClick={onClose}
          />
          <h1 className="font-bold text-gray-700 mb-3">Create Blog</h1>

          <input
            type="text"
            placeholder="Blog Title"
            name="title"
            value={formData.title}
            className="w-full border px-4 py-2 rounded-lg mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Slug"
            name="slug"
            value={formData.slug}
            className="w-full border px-4 py-2 rounded-lg mb-3"
            onChange={handleChange}
          />
          <textarea
            placeholder="Blog Description"
            name="description"
            value={formData.description}
            className="w-full border px-4 py-2 rounded-lg mb-3"
            onChange={handleChange}
          />
          <textarea
            placeholder="Blog Content"
            name="content"
            value={formData.content}
            className="w-full border px-4 py-2 rounded-lg mb-3"
            onChange={handleChange}
          />

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            onClick={handleAdd}
          >
            Submit
          </button>
        </section>
      </div>
    </>
  );
};

export default Form;
