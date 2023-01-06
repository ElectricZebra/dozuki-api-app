import { useQueryClient } from "@tanstack/react-query";

import PostsLayout from "../UI/PostsLayout";
import PostTitleCard from "./PostTitleCard";
import useUserPosts from "../../hooks/useUserPosts";

import "./Posts.css";

const User = ({ userId, setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data, error } = useUserPosts(userId);

  
  const users = queryClient.getQueryData(["users"]);
  const [user] = users ? users.filter(user => user.id == userId) : [{}];

  console.log("userId == " + userId)
  console.log("users == " + users)

  return (
    <div>
      <h1 className="section-header">Posts by: {user.name} - {data && data.length}</h1>
      <PostsLayout className="post-title-cards__container">
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data.map((post) => (
              <PostTitleCard key={post.id} setPostId={setPostId} post={post} />
            ))}
          </>
        )}
      </PostsLayout>
    </div>
  );
}

export default User;