import { useCallback } from "react";
import { useReducer, createContext } from "react";
export const PostListItems = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts:()=>{},
});

const reducerPostList = (currentpostList, action) => {
  let newPostList=currentpostList;
  if(action.type === "Delete"){
    newPostList=currentpostList.filter((post)=>post.id !== action.payload.id);
  }
  else if(action.type === "Add_Posts"){
    newPostList=action.payload.posts;
  }
  else if(action.type === "Add"){
    newPostList=[action.payload,...currentpostList];
  }
  return newPostList;
};
const PostListItemsProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducerPostList,[]);
  const addPost = (userId,title,body,reactions,tags) => {
    console.log("add Post called");
    dispatchPostList({
      type:"Add",
      payload:{
        id:new Date(),
        userId:userId,
        title:title,
        body:body,
        reactions:reactions,
        tags:tags,
      }
    });
  };
   const addPosts = (posts) => {
    dispatchPostList({
      type:"Add_Posts",
      payload:{
        posts
      }
    });
  };
  const deletePost = useCallback(
    (id) => {
      dispatchPostList({
        type:"Delete",
        payload:{
          id,
        },
      });
    },
    [dispatchPostList]
  );
  return(
    <PostListItems.Provider
    value={{
      postList,
      addPost,
      deletePost,
      addPosts
    }}
  >
    {children}
  </PostListItems.Provider>
  );
};
export default PostListItemsProvider;
