import { useQueryClient } from "@tanstack/react-query";

import useUserPosts from "../hooks/useUserPosts";
import Post from "./Post";
import "./UserPosts.css";

const User = ({ userId, setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useUserPosts(userId);

  
  const users = queryClient.getQueryData(["users"]);
  const [user] = users ? users.filter(user => user.id == userId) : [{}];




  return (
    <div className="user-posts">
      <div>
        <h1>Posts by: {user.name}</h1>
        <div>
          {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <div>
                {data.map((post) => (
                  <p key={post.id}>
                    
                    <a
                      onClick={() => setPostId(post.id)}
                      value={post.id}
                      href="#"
                      style={
                        // We can access the query data here to show bold links for
                        // ones that are cached
                        queryClient.getQueryData(["post", post.id])
                          ? {
                              fontWeight: "bold",
                              color: "green",
                            }
                          : {}
                      }
                    >
                      {/* capitalize title */}
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </a>
                  </p>
                ))}
              </div>
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;