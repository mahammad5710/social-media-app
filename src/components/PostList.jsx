import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListItems } from "../store/post-list-items";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const PostList = () => {
  const { postList, addPosts,fetching } = useContext(PostListItems);

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