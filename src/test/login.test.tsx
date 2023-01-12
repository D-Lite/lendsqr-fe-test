/* eslint-disable testing-library/prefer-screen-queries */
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Login from '../pages/Login';

describe('App Login', () => {
  it('show errors when fields', async () => {
    render(<Login />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    screen.debug();
    // expect(wrapperEl).toBeInTheDocument();
  });
});
