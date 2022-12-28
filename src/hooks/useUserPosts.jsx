import { useQuery } from "@tanstack/react-query";

function useUserPosts(props) {
  return useQuery({
    queryKey: ["post", props],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props}`).then((res) =>
        res.json()
      ),
  });
}

export default useUserPosts;