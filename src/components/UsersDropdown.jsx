import { useState } from 'react';

import useUsers from "../hooks/useUsers";
import "./UsersDropdown.css";


function UsersDropdown({saveUserId, setPostId}) {
  const [selectedUser, setSelectedUser] = useState(-1)
  
  const { status, data, error, isFetching } = useUsers();



  // send user id to parent component
  const setUserHandler = (event) => {
    setSelectedUser(event.target.value);
    setPostId(-1);
    // ToDo figure out when refresh of selectedUser occurs
    saveUserId(event.target.value)
  };

  return (
    <div className="user-select">
      <h1>Select A User</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <select className="users-dropdown" onChange={setUserHandler} >
              {data.map((user) => {
                return (
                  <option
                    key={user.id}
                    value={user.id}
                  >
                    {user.name}
                  </option>
                );
              })}
            </select>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default UsersDropdown;
