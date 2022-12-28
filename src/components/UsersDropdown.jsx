import { useState } from 'react';
import useUsers from "../hooks/useUsers";


function UsersDropdown(props) {
  const [selectedUser, setSelectedUser] = useState(-1)
  
  const { status, data, error, isFetching } = useUsers();



  // send user id to parent component
  const setUserHandler = (event) => {
    setSelectedUser(event.target.value)
    // ToDo figure out when refresh of selectedUser occurs
    props.onSelectedUser(event.target.value)
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <select vaule={props.userId} onChange={setUserHandler}>
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
