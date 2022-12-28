import { useQuery } from "@tanstack/react-query";

function useUserPosts(userId) {
  return useQuery({
    queryKey: ["post", userId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) =>
        res.json()
      ),
  });
}

export default useUserPosts;