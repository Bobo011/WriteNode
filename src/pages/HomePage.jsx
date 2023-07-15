import { useState,useEffect ,useRef } from "react";
import { PostCard } from "../components";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import {useTitle} from '../hooks/useTitle'

export const HomePage = () => {
  useTitle('Home')

  const [posts, setPosts] = useState([]);
  const postRef = useRef(collection(db, "post"));
  const [toggle,setToggle] = useState(false)
 
  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    console.log('---');
    getPosts();
  }, [postRef,toggle]);

  return (
    <section>
      {posts.map((post) => (
        <PostCard toggle={toggle} setToggle={setToggle} key={post.id} post={post} />
      ))}
    </section>
  );
};
