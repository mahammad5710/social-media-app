import { useReducer, createContext } from "react";
export const PostListItems = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerPostList = (currentpostList, action) => {
  let newPostList=currentpostList;
  if(action.type === "Delete"){
    newPostList=currentpostList.filter((post)=>post.id !== action.payload.id);
  }
  else if(action.type === "Add"){
    newPostList=[action.payload,...currentpostList];
  }
  return newPostList;
};
const PostListItemsProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducerPostList,Default_post_list);
  const addPost = (userID,title,body,reactions,tags) => {
    dispatchPostList({
      type:"Add",
      payload:{
      id:Date.now,
      title:title,
      body:body,
      reactions:reactions,
      userId:userID,
      tags:tags
      }
    });
  };
  const deletePost = (id) => {
    dispatchPostList({
      type:"Delete",
      payload:{
        id
      }
    });
  };
  return(
    <PostListItems.Provider
    value={{
      postList,
      addPost,
      deletePost,
    }}
  >
    {children}
  </PostListItems.Provider>
  );
};
const Default_post_list=[
  {
    id:'1',
    title:'going to pondicherry',
    body:'hi friends i am going to pondicheery to enjoy my weekends',
    reactions:2,
    userId:'mahammad_harizz',
    tags:['pondicherry','weekend','enjoy','trip']
  },
  {
    id:'2',
    title:'got a job',
    body:'hi friends finally i got a gob at cognizant',
    reactions:5,
    userId:'mahammad_harizz',
    tags:['developer','job','cognizant','hapiness']
  },
  {
    id:'3',
    title:'got a job',
    body:'hi friends finally i got a gob at cognizant',
    reactions:5,
    userId:'mahammad_harizz',
    tags:['developer','job','cognizant','hapiness']
  },

];
export default PostListItemsProvider;
