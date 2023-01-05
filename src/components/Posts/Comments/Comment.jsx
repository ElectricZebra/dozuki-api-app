import { AiOutlineComment } from 'react-icons/ai'
import { IconContext } from 'react-icons';

import "./Comment.css";

const Comment = ({ comment }) => {
  
  return (
    <div className="comment__container">
      <IconContext.Provider value={{ size: "2em", className: "react-icons-comment" }}>
        <div>
          <AiOutlineComment className="react-icons-comment" />
        </div>
      </IconContext.Provider>
      <div>
        <div className="comment__title">
          <div className="comment__name"><b>Name:</b> {comment.name}</div> 
          <div><b>Email:</b> {comment.email}</div>
        </div >
        <div className="comment__body">
          <b>Body:</b> {comment.body}
        </div>
      </div>
    </div>    
  )
}

export default Comment;