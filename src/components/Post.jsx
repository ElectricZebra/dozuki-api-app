import usePost from "../hooks/usePost";
import "./Post.css";

const Post = ({ postId, setPostId }) => {
  // console.log("post id == " + postId)
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
            <p>Post Body: {data.body}</p>
          </div>
          <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
      <div className="page-back__container">
        <a className="page-back__button"
        onClick={() => setPostId(-1)} 
        href="#">
          Back
        </a>
      </div>
    </div>
  );
}


export default Post;