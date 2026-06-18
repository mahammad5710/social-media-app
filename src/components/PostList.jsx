import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListItems } from "../store/post-list-items";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const PostList = () => {
  const { postList, addPosts } = useContext(PostListItems);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if(postList.length > 0){
      return;
    }
    setFetching(true);

    const controller = new AbortController();

    fetch("https://dummyjson.com/posts", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      })
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <Loader />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </>
  );
};

export default PostList;