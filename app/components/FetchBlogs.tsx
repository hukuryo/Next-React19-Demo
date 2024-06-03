"use client";

export default function FetchBlogs() {
  const fetchBlogs = async () => {
    try {
      const res = await fetch("http://localhost:8787");
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
      <button onClick={fetchBlogs}>ユーザの一覧を取得!!</button>
    </div>
  );
}
