//User.test.jsx
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import MainUser from './User';
test('rendering MainUser', () => {
    render (<MainUser 
        img = "https://avatars.githubusercontent.com/u/86603327?v=4"
        name = "Robe-Angular"
        hobbies = {["reading","programming","sleeping"]}
        age = {27}
      />);
    const thirdElement = screen.getByText(/Sleeping/i);
    expect(thirdElement).toBeInTheDocument();
});