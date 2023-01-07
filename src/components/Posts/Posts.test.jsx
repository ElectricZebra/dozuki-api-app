import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import Posts from './Posts';

describe('Post component', () => {
  test('renders 100 post links if request succeeds', async () => {
    const queryClient = new QueryClient();
    const component = render (
      
      <QueryClientProvider client={queryClient}>
        <Posts />;
      </QueryClientProvider>
    )

    await waitFor(() => screen.getAllByRole('link'))

    // expect(component.getByText('All Posts')).toBeInTheDocument()
    expect(component.getAllByRole('link')).toHaveLength(100)
  });

  
});