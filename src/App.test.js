import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
test('renders the landing page', () => {
    render (<App/>);
    const usersName = screen.getAllByText(/user Name/i);
    expect(usersName).toHaveLength(3);
    expect(usersName[2]).toHaveTextContent(/Jere/i);

});

test('MainUser image loaded', () => {
    render(<App/>);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    const altAttribute = image.getAttribute("alt");
    expect(altAttribute).toMatch(/Robe-aNgulAr/i);
});

test('password State', () => {
    render (<App/>);
    const validPasswordText = screen.getByText(/Valid password/i);
    const invalidPasswordText = screen.queryByText(/inValid password/i);
    expect(validPasswordText).toBeInTheDocument();
    expect(invalidPasswordText).not.toBeInTheDocument();

});