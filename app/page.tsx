import FetchBlogs from "./components/FetchBlogs";
import FetchBlog from "./components/FetchBlog";
import PostArticle from "./components/PostArticle";
import Counter from "./components/Counter";
import RefCleanup from "./components/RefCleanup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <FetchBlogs />
      <FetchBlog blogId={"1"} /> */}
      {/* <PostArticle /> */}
      {/* <Counter /> */}
      <RefCleanup />
    </main>
  );
}
