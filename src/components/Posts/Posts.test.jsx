import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

import Posts from "./Posts";

describe("Posts component", () => {
  test("renders 100 post links if request succeeds", async () => {
    const queryClient = new QueryClient();
    const posts = render(
      <QueryClientProvider client={queryClient}>
        <Posts />;
      </QueryClientProvider>
    );

    await waitFor(() => screen.getAllByRole("link"));

    // expect(component.getByText('All Posts')).toBeInTheDocument()
    expect(posts.getAllByRole("link")).toHaveLength(100);
  });


});