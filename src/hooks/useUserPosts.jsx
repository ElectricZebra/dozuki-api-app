import { useQuery } from "@tanstack/react-query";

function useUserPosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts?userId=#{}").then((res) =>
        res.json()
      ),
  });
}

export default useUserPosts;