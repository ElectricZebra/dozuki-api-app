import { useQuery } from "@tanstack/react-query";

function usePost(postId) {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) =>
        res.json()
      ),
  });
}

export default usePost;