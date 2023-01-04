import Card from "./UI/Card";

import "./Comment.css";

const Comment = ({ comment }) => {
  
  return (
    <Card className="comment">
      <p><b>Name:</b> {comment.name}</p> 
      <p><b>Email:</b> {comment.email}</p>
      <p><b>Body:</b> {comment.body}</p>
    </Card>
  )
}

export default Comment;