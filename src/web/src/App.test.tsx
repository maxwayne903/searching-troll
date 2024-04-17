import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component tests", () => {
    test("should show title all the time", () => {

        render(<App />);

        expect(screen.getByText(/searching-troll/i)).toBeDefined(); 
    })

    test("should show 'All' link in menu", () => {

        render(<App />);

        expect(screen.getByText(/My Order/i)).toBeDefined();
    })
})
