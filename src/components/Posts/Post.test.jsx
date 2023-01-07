import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

import Post from "./Post";

describe("Post component", () => {
  test("renders single post to have a 'Back' button link request succeeds", async () => {
    const queryClient = new QueryClient();
    const posts = render(
      <QueryClientProvider client={queryClient}>
        <Post />;
      </QueryClientProvider>
    );

    await waitFor(() => screen.getAllByRole("link"));

    expect(posts.getAllByRole("link")).toHaveLength(1);
  });


});