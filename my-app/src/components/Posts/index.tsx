"use client";

import { useEffect, useState } from "react";
import Post, { IPost } from "../Post";
import { getPosts } from "@/app/actions/posts";

export default function Posts() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const updatePosts = async () => {
      const posts = await getPosts(0);
      setPosts(posts?.posts || []);
    };
    updatePosts();
  }, []);

  if (!posts?.length) return <p>Currently no posts are availible</p>;

  return (
    <section>
      {posts.map(({ body, title, id, userId }) => (
        <Post key={id} title={title} body={body} userId={userId} />
      ))}
    </section>
  );
}
