import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@testing-library/react';

import { Navigation } from '.';

describe('Sidebar should', () => {
    it('render properly', () => {
        render(<Navigation navIsVisible={true} />);
        const sidebarEl = screen.queryByTestId('sidebar');
        expect(sidebarEl).toBeInTheDocument();
    });
})