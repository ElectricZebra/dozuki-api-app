import Card from "../UI/Card";

import "./PostTitleCard.css";

const PostTitleCard = ({ setPostId, post }) => {
  return (
    <a
      className="post-title__container"
      onClick={() => setPostId(post.id)}
      value={post.id}
      href="#"
    >
      <Card>
        <h3>{post.title}</h3>
      </Card>
    </a>
  );
};

export default PostTitleCard;
