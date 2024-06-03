"use client";

import { FC } from "react";

interface FetchBlogProps {
  blogId: string;
}

const FetchBlog: FC<FetchBlogProps> = ({ blogId }) => {
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`http://localhost:8787/blogs/${blogId}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchBlogs}>ユーザーの情報を取得!!</button>
    </div>
  );
};

export default FetchBlog;
