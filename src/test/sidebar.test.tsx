import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';

import { Navigation } from '../components';

describe('Sidebar should', () => {
    it('render properly', () => {
        const { queryByTestId } = render(<Navigation navIsVisible={true} />);
        const sidebarEl = queryByTestId('sidebar');
        expect(sidebarEl).toBeInTheDocument();
    });
})