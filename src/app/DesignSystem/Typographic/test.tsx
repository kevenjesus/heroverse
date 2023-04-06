import { render } from '@testing-library/react';
import Typographic from '.';
import '@testing-library/jest-dom'

describe('Typographic', () => {
  it('should render', () => {
    const { container } = render(<Typographic>heroverse</Typographic>);
    expect(container).toMatchSnapshot()
  });

  it('should render props correctly', () => {
    const { getByText } = render(<Typographic color='darkBlue' size='20px' weight='700'>heroverse</Typographic>);
    expect(getByText('heroverse')).toBeInTheDocument()
  });
});
