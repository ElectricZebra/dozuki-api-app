import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import UsersDropdown from "./components/Users/UsersDropdown"
import UserPosts from "./components/Posts/UserPosts";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [userId, setUserId] = useState(-1);
  const [postId, setPostId] = useState(-1);

  const returnHomeHandler = () => {
    setPostId(-1);
    setUserId(-1);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="sticky-header">
          <div className="banner">Nick Regoli Demo App</div>
          <div className="nav-bar">
            <a href="" onClick={returnHomeHandler}>
              <img className="dozuki-logo" src="https://www.dozuki.com/hubfs/NB%202022/Logos/Dozuki-Logo.svg" alt="Dozuki Logo"></img>
            </a>
            <UsersDropdown saveUserId={setUserId} setPostId={setPostId} />
          </div>
        </div>
        <div className="main">
          { userId > -1 && postId == -1 && <UserPosts userId={userId} setPostId={setPostId} /> }
          { postId > -1 && <Post postId={postId} setPostId={setPostId} /> }
          { userId == -1 && postId == -1 && <Posts setPostId={setPostId} /> }
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
