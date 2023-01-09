import { useQueryClient } from "@tanstack/react-query";

import Card from "../UI/Card";

import "./PostTitleCard.css";

const PostTitleCard = ({ setPostId, post }) => {
  const queryClient = useQueryClient();
  
  const users = queryClient.getQueryData(["users"]);
  const [user] = users ? users.filter(user => user.id == post.userId) : [{}];
  
  return (
    <a
      className="post-title__container"
      onClick={() => setPostId(post.id)}
      value={post.id}
      href="#"
    >
      <Card>
        <h3>{post.title}</h3>
        <h6>By: { user?.name }</h6>
      </Card>
    </a>
  );
};

export default PostTitleCard;
