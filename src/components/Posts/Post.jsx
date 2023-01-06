import { AiFillCaretLeft } from "react-icons/ai";

import User from "../Users/User";
import Comments from "./Comments/Comments";
import usePost from "../../hooks/usePost";

import "./Post.css";

const Post = ({ postId, setPostId }) => {
  const { status, data, error } = usePost(postId);

  return (
    <div className="post-container">
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="post-title">Post Title: {data.title}</div>
          <User userId={data.userId} />
          <div className="post-body">
            <p>
              <b>Post Body:</b> {data.body}
            </p>
          </div>
          <Comments postId={postId} />
        </>
      )}
      <div className="page-back__container">
        <a className="page-back__button" onClick={() => setPostId(-1)} href="#">
          <AiFillCaretLeft className="react-icons" />
          Back
        </a>
      </div>
    </div>
  );
};

export default Post;
