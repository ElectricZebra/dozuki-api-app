import { useQueryClient } from "@tanstack/react-query";

import Card from "./UI/Card";
import "./PostTitleCard.css";

const PostTitleCard = ({ setPostId, post }) => {
  const queryClient = useQueryClient();

  return (
    <a
      className="post-title__container"
      onClick={() => setPostId(post.id)}
      value={post.id}
      href="#"
    >
      <Card
        className={
          queryClient.getQueryData(["post", post.id])
            ? "cached-post"
            : "uncached-post"
        }
      >
        <h3>{post.title}</h3>
        {/* <p>{post.body.substring(0, 50)}</p> */}
      </Card>
    </a>
  );
};

export default PostTitleCard;
