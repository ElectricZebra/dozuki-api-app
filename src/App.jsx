import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import UsersDropdown from "./components/UsersDropdown"
import UserPosts from "./components/UserPosts";
import Posts from "./components/Posts";
import Post from "./components/Post";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [userId, setUserId] = useState(-1);
  const [postId, setPostId] = useState(-1);

  // const queryPostThing = queryClient.getQueryData(["users"])
  // console.log("queryPostThing data === " + queryPostThing)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="nav-bar">
          <h1 className="header-name">DOZUKI</h1>      
          <UsersDropdown saveUserId={setUserId} setPostId={setPostId} />
        </div>
        {userId > -1 && postId == -1 ? (
          <UserPosts userId={userId} setPostId={setPostId} />
        ) : <></> }
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : <></>}


      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
