import { useQueryClient } from "@tanstack/react-query";

const User = ({ userId }) => {
  const queryClient = useQueryClient();
  
  
  const users = queryClient.getQueryData(["users"]);
  const [user] = users ? users.filter(user => user.id == userId) : [{}];

  return <div><b>Author:</b> {user.name}</div>
}

export default User;