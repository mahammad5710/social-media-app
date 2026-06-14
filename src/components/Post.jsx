import { MdDelete } from "react-icons/md";
import { PostListItems } from "../store/post-list-items";
import { useContext } from "react";
const Post = ({ post }) => {
   const { deletePost }=useContext(PostListItems);
  return (
    <div className="card post-card" style={{ Width: " 30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
            <MdDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hastag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="alert alert-success" role="alert">
        this post is reacted by {post.reactions} people
      </div>
    </div>
  );
};
export default Post;
