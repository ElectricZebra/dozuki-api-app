import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import UsersDropdown from "./components/UsersDropdown"
import UserPosts from "./components/UserPosts";
import Posts from "./components/Posts";
import Post from "./components/Post";

const queryClient = new QueryClient();

function App() {
  const [userId, setUserId] = useState(-1);
  const [postId, setPostId] = useState(-1);
  const saveUserId = (selectedUserId) => {
    setUserId(selectedUserId)
  } 

  const savePostId = (selectedPostId) => {
    setPostId(selectedPostId)
    console.log("in app post id == " + postId + " &&  "  )
  } 

  console.log("in app post id == " + postId + " &&###3  "  )

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello World</h1>      
        <UsersDropdown userId={userId} saveUserId={saveUserId} />
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
