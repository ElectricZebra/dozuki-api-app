import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

import Post from "./Post";

describe("Post component", () => {
  test("renders single post to have a 'Back' button link", async () => {
    const queryClient = new QueryClient();
    const post = render(
      <QueryClientProvider client={queryClient}>
        <Post />;
      </QueryClientProvider>
    );
    console.log("link =======" + post.getAllByRole("link"));
    expect(post.getAllByRole("link")).toHaveLength(1);
  });

  test("renders a paragraph element with text that includes 'Post Body:' if request succeeds", async () => {
    const queryClient = new QueryClient();
    const post = render(
      <QueryClientProvider client={queryClient}>
        <Post postId={1} />;
      </QueryClientProvider>
    );

    await waitFor(() => screen.getByText("Post Body:"), { exact: false });
    expect(post.getByText("Post Body:", { exact: false })).toBeInTheDocument();
  });
});