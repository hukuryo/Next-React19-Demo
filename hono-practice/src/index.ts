import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";

let blogPosts = [
  {
    id: "1",
    title: "blog1",
    content: "content1",
  },
  {
    id: "2",
    title: "blog2",
    content: "content2",
  },
  {
    id: "3",
    title: "blog3",
    content: "content3",
  },
];

const app = new Hono();
app.use("*", prettyJSON());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/entry/:id", (c) => {
  const id = c.req.param("id");
  return c.json({
    "you id is": id,
  });
});

app.post("/post", async (c) => {
  const { title, content } = await c.req.json<{
    title: string;
    content: string;
  }>();

  const newPost = { id: String(blogPosts.length + 1), title, content };
  blogPosts = [...blogPosts, newPost];
});

app.put("/post/:id", async (c) => {
  const id = c.req.param("id");
  const index = blogPosts.findIndex((p) => p.id === id);

  if (index === -1) {
    return c.json({ message: "Post not found" }, 400);
  }

  const { title, content } = await c.req.json();

  blogPosts[index] = { ...blogPosts[index], title, content };

  return c.json(blogPosts[index]);
});

export default app;
