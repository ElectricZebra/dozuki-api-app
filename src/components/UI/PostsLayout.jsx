import "./PostsLayout.css";

const PostsLayout = (props) => {
  const classes = "posts__container " + props.className;

  return <div className={classes}>
    <div className="posts-layout">{props.children}</div>
  </div>;
};

export default PostsLayout;
