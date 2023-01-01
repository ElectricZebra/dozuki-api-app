import { useQueryClient } from "@tanstack/react-query";

import useUserPosts from "../hooks/useUserPosts";
import PostTitleCard from "./PostTitleCard";
import "./Posts.css";

const User = ({ userId, setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useUserPosts(userId);

  
  const users = queryClient.getQueryData(["users"]);
  const [user] = users ? users.filter(user => user.id == userId) : [{}];

  return (
    <div>
      <h1 className="section-header">Posts by: {user.name}</h1>
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

export default User;