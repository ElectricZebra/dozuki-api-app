import PostsLayout from "../UI/PostsLayout";
import PostTitleCard from "./PostTitleCard";
import usePosts from "../../hooks/usePosts";

import "./Posts.css";


function Posts({ setPostId }) {
  const { status, data, error } = usePosts();

  return (
    <div>
      <div className="section-header">
        <h1 >All Posts - {data?.length}</h1>
      </div>
      
      <PostsLayout className="post-title-cards__container">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data?.map((post) => (
              <PostTitleCard key={post.id} setPostId={setPostId} post={post} />
            ))}
          </>
        )} 
      </PostsLayout>
    </div>
  );
}

export default Posts;