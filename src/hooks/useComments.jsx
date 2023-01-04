import { useQuery } from "@tanstack/react-query";

function useComments(postId) {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) =>
        res.json()
      ),
  });
}

export default useComments;