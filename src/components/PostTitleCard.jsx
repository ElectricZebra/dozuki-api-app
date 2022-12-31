import { useQueryClient } from "@tanstack/react-query";

import "./PostTitleCard.css";

const PostTitleCard = ({setPostId, post}) => {
  const queryClient = useQueryClient();
  return (      
    <p>
      <a
        onClick={() => setPostId(post.id)}
        value={post.id}
        href="#"
        className={
          // We can access the query data here to show bold links for
          // ones that are cached
          queryClient.getQueryData(["post", post.id])
            ? "cached-post-data"
            : ""
        }
      >
        {post.title}
      </a>
    </p>
  )
}

export default PostTitleCard;