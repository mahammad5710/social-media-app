import { useReducer, createContext,useEffect, useCallback,useState} from "react";
export const PostListItems = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching:false,
});

const reducerPostList = (currentpostList, action) => {
  let newPostList = currentpostList;
  if (action.type === "Delete") {
    newPostList = currentpostList.filter(
      (post) => post.id !== action.payload.id,
    );
  } else if (action.type === "Add_Posts") {
    newPostList = action.payload.posts;
  } else if (action.type === "Add") {
    newPostList = [action.payload, ...currentpostList];
  }
  return newPostList;
};
const PostListItemsProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducerPostList, []);
  const [fetching, setFetching] = useState(false);
  const addPost = (post) => {
    console.log(post);
    dispatchPostList({
      type: "Add",
      payload: post,
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "Add_Posts",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (id) => {
      dispatchPostList({
        type: "Delete",
        payload: {
          id,
        },
      });
    },
    [dispatchPostList],
  );
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();

    fetch("https://dummyjson.com/posts", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostListItems.Provider
      value={{
        postList,
        addPost,
        deletePost,
        fetching
      }}
    >
      {children}
    </PostListItems.Provider>
  );
};
export default PostListItemsProvider;
