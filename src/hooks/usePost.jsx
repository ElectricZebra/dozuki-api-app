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

// import { useQuery } from "@tanstack/react-query";

// function useUserPosts(userId) {
//   return useQuery({
//     queryKey: ["post", userId],
//     queryFn: () =>
//       fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((res) =>
//         res.json()
//       ),
//   });
// }

// export default useUserPosts;