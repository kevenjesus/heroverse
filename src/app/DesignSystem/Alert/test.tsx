import React from 'react';
import { render } from '@testing-library/react';
import Alert from '.';
import '@testing-library/jest-dom'


describe('Alert component', () => {
    it('should render with the type Success', () => {
        const { container } = render(<Alert type="success">Test alert</Alert>);
        expect(container).toMatchSnapshot()
    });

    it('should render with the type Success', () => {
        const { getByRole } = render(<Alert type="success">Test alert</Alert>);
        const img = getByRole('img');
        expect(img).toHaveAttribute('src', '/checked.png');
    });

    it('should render with the type Error', () => {
        const { getByRole } = render(<Alert type="error">Test alert</Alert>);
        const img = getByRole('img');
        expect(img).toHaveAttribute('src', '/warning.png');
    });

});
