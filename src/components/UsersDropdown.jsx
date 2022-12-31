import useUsers from "../hooks/useUsers";
import "./UsersDropdown.css";


function UsersDropdown({saveUserId, setPostId}) {
  const { status, data, error, isFetching } = useUsers();

  const setUserHandler = (event) => {
    setPostId(-1);
    saveUserId(event.target.value)
  };

  return (
    <div className="user-select">
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <label for="users">Select A User</label>
            <select name="users" className="users-dropdown" onChange={setUserHandler} >
              <option value="-1">--Please select a user--</option>
              {data.map((user) => {
                return (
                  <option key={user.id} value={user.id} >
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
