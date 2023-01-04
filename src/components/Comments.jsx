import Comment from "./Comment";
import useComments from "../hooks/useComments";

import "./Comments.css";

const Comments = ({ postId }) => {
  const { status, data, error, isFetching } = useComments(postId);

  return (
    <div>
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div className="comments__container">
          Comments: 
          {data.map(comment => {
            return <Comment key={comment.id} comment={comment} />
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
