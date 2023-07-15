import { useState, useEffect, useRef } from "react";
import { PostCard, SkeletonCard } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useTitle } from "../hooks/useTitle";

export const HomePage = () => {
  useTitle("Home");

  const [posts, setPosts] = useState(new Array(4).fill(false));
  const postRef = useRef(collection(db, "post"));
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    console.log("---");
    getPosts();
  }, [postRef, toggle]);

  return (
    <section>
      {posts.map((post, index) =>
        post ? (
          <PostCard
            toggle={toggle}
            setToggle={setToggle}
            key={post.id}
            post={post}
          />
        ) : (
          <SkeletonCard key={index} />
        )
      )}
    </section>
  );
};
