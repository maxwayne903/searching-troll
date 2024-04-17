import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component tests", () => {
    test("should show title all the time", () => {

        render(<App />);

        expect(screen.getByText(/searching-troll/i)).toBeDefined(); 
    })

    test("should show 'My Order' link in menu", () => {

        render(<App />);

        expect(screen.getByRole('link', {name: /My Order/i})).toBeDefined();
    })
    
    test("should show 'Home' heading in 'H1' tag", () => {

        render(<App />);

        expect(screen.getByRole('heading', {level: 1, name: /Home/i})).toBeDefined();
})
})