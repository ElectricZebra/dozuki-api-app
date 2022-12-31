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

  const returnHomeHandler = () => {
    setPostId(-1);
    setUserId(-1);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="nav-bar">
          <a href="" onClick={returnHomeHandler}>
            <img className="dozuki-logo" src="https://www.dozuki.com/hubfs/NB%202022/Logos/Dozuki-Logo.svg" alt="Dozuki Logo"></img>
          </a>
          <UsersDropdown saveUserId={setUserId} setPostId={setPostId} />
        </div>
        {userId > -1 && postId == -1 ? (
          <UserPosts userId={userId} setPostId={setPostId} />
        ) : <></> }
        {postId > -1 ? (
          <Post postId={postId} setPostId={setPostId} />
        ) : <></>}
        {userId == -1 && postId == -1 ? (
          <Posts setPostId={setPostId} />
        ) : <></>}


      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
