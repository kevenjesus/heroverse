import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';
import '@testing-library/jest-dom'

const click = jest.fn()

describe('Button', () => {
  it('should render', () => {
    const { container } = render(<Button variant='primary'>button</Button>);
    expect(container).toMatchSnapshot()
  });

  it('should render loading is true', () => {
    const { getByText } = render(<Button variant='secondary' loading>button</Button>);
    expect(getByText('Aguarde...')).toBeInTheDocument()
  });

  it('should render with onClick', async () => {
    render(<Button variant='secondary' onClick={click}>button</Button>);
    const button = await screen.findByText("button")
    fireEvent.click(button)
    expect(click).toHaveBeenCalled()
  });
});
