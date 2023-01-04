import useUsers from "../hooks/useUsers";
import "./UsersDropdown.css";


function UsersDropdown({saveUserId, setPostId}) {
  const { status, data, error } = useUsers();

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
            <label>
              Select A User
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
            </label>
          </>
        )}
      </div>
    </div>
  );
}

export default UsersDropdown;
