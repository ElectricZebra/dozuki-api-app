import { render, screen } from './utils/test-utils';

import App from './App';


describe('App component', () => {
  test('renders the top banner with that includes "JSON Placeholder Demo App - Nick Regoli" as text', () => {
    render(<App />);

    const topBanner = screen.getByText('JSON Placeholder Demo App - Nick Regoli');
    expect(topBanner).toBeInTheDocument();
  })

  test('renders an element with className "main"', () => {
    render(<App />)
    const element = screen.getByRole('img')
    expect(element.className).toEqual('dozuki-logo')
  })

  test('renders an img element with alt text "dozuki-logo"', () => {
    render(<App />)
    const dozukiImage = screen.getByRole('img')
    expect(dozukiImage.alt).toContain("Dozuki Logo")
  })
})