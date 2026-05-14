import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const foundBlog = storedBlogs.find((item) => item.slug === slug);

    setBlog(foundBlog);
  }, [slug]);

  if (!blog) {
    return (
      <h2 className="text-center mt-20 text-xl font-bold">
        Blog Not Found
      </h2>
    );
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-linear-to-r from-primary to-secondary">
      <div>
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          {blog.title}
        </h3>
        <p className="text-white">{blog.content}</p>
      </div>
    </section>
  );
};

export default BlogDetails;