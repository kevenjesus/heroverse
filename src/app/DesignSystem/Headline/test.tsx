import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Headline from '.';

describe('Headline', () => {
  it('should render', () => {
    const { container } = render(<Headline as="h1">titulo</Headline>);
    expect(container).toMatchSnapshot()
  });

  it('should render headline specific tag', () => {
    const { container, getByText } = render(<Headline as="h2">titulo</Headline>);
    expect(container.getElementsByTagName('h2').length).toBe(1)
    expect(getByText('titulo')).toHaveStyle({'font-size': '25px'})
  });

  it('should render headline props', () => {
    const { getByText } = render(<Headline as="h1" color='darkBlue' weight='700'>titulo</Headline>);
    expect(getByText('titulo')).toHaveStyle({'font-weight': '700'})
  });
});
