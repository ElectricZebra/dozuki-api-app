import Comment from "./Comment";
import useComments from "../hooks/useComments";

import "./Comments.css";

const Comments = ({ postId }) => {
  const { status, data, error, isFetching } = useComments(postId);

  return (
    <div className="comments__container">
      {!postId || status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div className="comments__list">
          <h4>Comments: </h4>
          {data.map(comment => {
            return <Comment key={comment.id} comment={comment} />
          })}
        </div>
      )}
    </div>
  );
};

export default Comments;
