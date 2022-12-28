import useUsers from "../hooks/useUsers"

function UsersDropdown() {
  const { status, data, error, isFetching } = useUsers();

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
            <select>
              {data.map(user => <option>{user.name}</option>)}
            </select>
            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default UsersDropdown;