import App from './App'
import { render, screen } from './utils/test-utils'



describe('App component', () => {
  test('renders the top banner with that includes "JSON Placeholder Demo App - Nick Regoli" as text', () => {
    render(<App />);

    const topBanner = screen.getByText('JSON Placeholder Demo App - Nick Regoli');
    expect(topBanner).toBeInTheDocument();
  })


  test('renders an img element with className "dozuki-logo"', async () => {
    render(<App />)
    const element = screen.getByRole('img')
    expect(element.className).toEqual('dozuki-logo')
  })
})
