import { AiFillCaretLeft } from 'react-icons/ai';

import Comments from './Comments/Comments';
import usePost from "../../hooks/usePost";

import "./Post.css";

const Post = ({ postId, setPostId }) => {
  const { status, data, error, isFetching } = usePost(postId);
  

  return (
    <div className="post-container">
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="post-title">Post Title: {data.title}</div>
          <div>
            <p><b>Post Body:</b> {data.body}</p>
          </div>
          <Comments postId={postId} />
          {/* <div>{isFetching ? "Background Updating..." : " "}</div> */}
        </>
      )}
      <div className="page-back__container">
        <a className="page-back__button"
        onClick={() => setPostId(-1)} 
        href="#">
          <AiFillCaretLeft className="react-icons" />
          Back
        </a>
      </div>
    </div>
  );
}


export default Post;