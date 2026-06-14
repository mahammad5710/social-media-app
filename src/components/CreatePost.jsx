import { useContext, useRef } from "react";
import { PostListItems } from "../store/post-list-items";
const CreatePost = () => {
  const userIDElement=useRef();
  const titleElement=useRef();
  const bodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const { addPost }=useContext(PostListItems);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userID=userIDElement.current.value;
    const title=titleElement.current.value;
    const body=bodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags = tagsElement.current.value.trim().split(/\s+/);
    addPost(userID,title,body,reactions,tags);
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          userID
        </label>
        <input
          type="text"
          className="form-control"
          id="userid"
          aria-describedby="emailHelp"
          placeholder="Enter your userId"
          ref={userIDElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post-title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="how are feeling today"
          ref={titleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          post content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          aria-describedby="emailHelp"
          placeholder="tell us about post....."
          ref={bodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          placeholder="Enter no of reactions"
          className="form-control"
          id="reactions"
          aria-describedby="emailHelp"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hastags" className="form-label">
          hastags
        </label>
        <input
          type="text"
          placeholder="enter hastags for trending"
          className="form-control"
          id="hastags"
          aria-describedby="emailHelp"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        post
      </button>
    </form>
  );
};
export default CreatePost;
