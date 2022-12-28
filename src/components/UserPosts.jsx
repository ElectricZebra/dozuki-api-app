import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import useUserPosts from "../hooks/useUserPosts";
import Post from "./Post";

const User = ({ userId, setPostId }) => {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useUserPosts(userId);

  // const queryPostThing = queryClient.getQueryData(["user", 3])
  // console.log("queryPostThing data === " + queryPostThing)



  return (
    <div>
      <h1>User Id {userId} Posts</h1>
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
                    {post.title}
                  </a>
                </p>
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