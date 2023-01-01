import { useQueryClient } from "@tanstack/react-query";

import PostTitleCard from "./PostTitleCard";
import "./Posts.css";

import usePosts from "../hooks/usePosts"

function Posts({ setPostId }) {
  // const queryClient = useQueryClient();
  // const posts = queryClient.getQueryData(["posts"]);
  const { status, data, error } = usePosts();

  return (
    <div>
      <h1 className="section-header">All Posts</h1>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;