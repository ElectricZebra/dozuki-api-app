import "./Comment.css";

const Comment = ({ comment }) => {
  
  return (
    <div className="comment__container">
      <div className="comment__title">
        <div className="comment__name"><b>Name:</b> {comment.name}</div> 
        <div><b>Email:</b> {comment.email}</div>
      </div >
      <div className="comment__body">
        <b>Body:</b> {comment.body}
      </div>
    </div>    
  )
}

export default Comment;