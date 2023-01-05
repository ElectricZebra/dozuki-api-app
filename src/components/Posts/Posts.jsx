import { useQueryClient } from "@tanstack/react-query";

import PostTitleCard from "./PostTitleCard";
import usePosts from "../../hooks/usePosts"

import "./Posts.css";


function Posts({ setPostId }) {
  // const queryClient = useQueryClient();
  // const posts = queryClient.getQueryData(["posts"]);
  const { status, data, error } = usePosts();

  return (
    <div>
      <div className="section-header">
        <h1 >All Posts</h1>
        <div className="post-count">Count: {data.length}</div>
      </div>
      
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