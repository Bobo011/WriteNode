import { useState } from "react";
import { PostCard } from "../components";
import { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "post");

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    console.log('---');
    getPosts();
  }, []);

  return (
    <section>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};
