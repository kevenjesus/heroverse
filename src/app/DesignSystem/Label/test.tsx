import React from 'react';
import { render } from '@testing-library/react';
import Label from '.';
import '@testing-library/jest-dom'

describe('Label', () => {
    it('should render', () => {
        const { container } = render(<Label variant="primary">Test label</Label>);
        expect(container).toMatchSnapshot()
    });

    
    it('should render the children prop', () => {
        const { getByText } = render(<Label variant="primary">Test label</Label>);
        expect(getByText('Test label')).toBeInTheDocument();
    });
});
