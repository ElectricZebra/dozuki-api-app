import { useQueryClient } from "@tanstack/react-query";

import "./PostTitleCard.css";

const PostTitleCard = ({setPostId, post}) => {
  const queryClient = useQueryClient();
  
  return (      
    <a className="post-title-card-container">
      <div
        onClick={() => setPostId(post.id)}
        value={post.id}
        href="#"
        className={ queryClient.getQueryData(["post", post.id]) ? "cached-post" : "uncached-post" }
      >
        {post.title}
      </div>
    </a>
  )
}

export default PostTitleCard;