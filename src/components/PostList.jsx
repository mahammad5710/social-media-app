import { useContext } from "react";
import Post from "./Post";
import { PostListItems } from "../store/post-list-items";
const PostList=()=>{
  const { postList }=useContext(PostListItems);
  return <>
  {postList.map((post)=>(
    <Post key={post.id} post={post}/>
  ))}
  </>
}
export default PostList;