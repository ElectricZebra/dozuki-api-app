import PostTitleCard from "./PostTitleCard";
import "./Posts.css";

import usePosts from "../hooks/usePosts"

function Posts({ setPostId }) {
  const { status, data, error, isFetching } = usePosts();

  return (
    <div>
      <h1>All Posts</h1>
      <div className="post-title-cards__container">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className="post-title-cards">
              {data.map((post) => (
                <PostTitleCard key={post.id} setPostId={setPostId} post={post} />
              ))}
            </div>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;