import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import UsersDropdown from "./components/UsersDropdown"
import User from "./components/User";
import Posts from "./components/Posts";

const queryClient = new QueryClient();

function App() {
  const [userId, setUserId] = useState(-1);
  const saveUserId = (selectedUserId) => {
    setUserId(selectedUserId)
  } 

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hello World</h1>      
        <UsersDropdown userId={userId} onSelectedUser={saveUserId} />
        {console.log("userid in app at time of render == " + userId )}
        {userId > -1 ? (
          <User userId={userId} />
        ) : <></>}
        {/* <Posts /> */}


      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
