import React, { useEffect, useState } from "react";
import blogdata from "../Components/blog";
import { Link } from "react-router-dom";
import Form from "../Components/Form";

const Blogs = () => {
  console.log(blogdata);
  const [blogs, setBlogs] = useState(() => {
    try {
      const storedBlogs = localStorage.getItem("blogs");

      if (!storedBlogs || storedBlogs === "undefined") {
        return blogdata;
      }

      return JSON.parse(storedBlogs);
    } catch (error) {
      console.error("Invalid JSON in localStorage");
      return blogdata;
    }
  });

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  const [openForm, setOpenForm] = useState(false);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-r from-primary to-secondary ">
      <h3 className="text-3xl font-bold text-center mb-12 text-white">Blogs</h3>
      <button
        className="px-3 py-2 bg-white text-primary rounded shadow cursor-pointer font-bold absolute right-5 top-30"
        onClick={() => setOpenForm(true)}
      >
        Add Blog
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {blogs.map((blog, index) => {
          return (
            <div
              key={index}
              className="
    bg-gradient-to-r from-primary to-secondary
    rounded-2xl
    p-6
    shadow-lg
    hover:shadow-2xl
    transition-all duration-300
    flex flex-col
    justify-between
    text-white
    max-w-sm
    mx-auto
  "
            >
              <div>
                <h1 className="text-xl font-bold text-center mb-3">
                  {blog.title}
                </h1>

                <p className="text-center text-white/90 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>

              <Link
                to={`/blogs/${blog.slug}`}
                className="
      mt-6
      self-center
      bg-white
      text-primary
      hover:bg-secondary
      hover:text-white
      px-5 py-2
      rounded-full
      text-sm font-medium
      transition-colors duration-300
    "
              >
                Read More
              </Link>
            </div>
          );
        })}
      </div>
      {openForm && (
        <Form
          onClose={() => setOpenForm(false)}
          blogdata={blogs}
          setBlogData={setBlogs}
        />
      )}
    </section>
  );
};

export default Blogs;
