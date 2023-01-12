import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GlobalProvider, context } from '../contexts/globalContext';
import Home from '../pages/Home';

describe('<GlobalProvider />', () => {
  const TestComponent = () => {
    const { user, setUser, logout } =
      React.useContext(context);
    return (
      <div>
        {user && <div role="user">{user.fullName}</div>}
        <button onClick={logout}>logout</button>
      </div>
    );
  };
  it('Should check the single user click', () => {
    render(<Home />)
    const button = screen.getByTestId('userSinglePage')

    fireEvent.click(button)

    expect(screen.getByText('organization')).toBeInTheDocument()
})
});