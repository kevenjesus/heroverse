import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Select from '.';

const options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 },
];

describe('Select', () => {
  it('should display placeholder text when no option is selected', () => {
    const { getByText } = render(<Select options={options} onChange={() => {}} />);
    expect(getByText('Selecione')).toBeInTheDocument();
  });

  it('should display selected option', () => {
    const { getByText } = render(
      <Select options={options} value='Option 2' onChange={() => {}} />
    );
    expect(getByText('Option 2')).toBeInTheDocument();
  });

  it('should display options when select field is clicked', () => {
    const { getByText } = render(<Select options={options} onChange={() => {}} />);
    fireEvent.click(getByText('Selecione'));
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
  });

  it('should call onChange when an option is clicked', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<Select options={options} onChange={handleChange} />);
    fireEvent.click(getByText('Selecione'));
    fireEvent.click(getByText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith({ label: 'Option 1', value: 1 });
  });

  it('should close overlay when clicking on overlay', async () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 800 });
    const { getByText } = render(<Select options={[{ label: 'Option 1', value: '1' }]} value={null} onChange={() => {}} />);
    fireEvent.click(getByText('Selecione'));
    const overlay = await screen.findByRole('banner', { name: 'overlay' });
    fireEvent.click(overlay);
    expect(overlay).not.toBeInTheDocument();
  });
  

  it('should close select when clicking outside', () => {
    const { container } = render(<Select options={[{ label: 'Option 1', value: '1' }]} value={null} onChange={() => {}} />);
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);
    fireEvent.mouseDown(outsideElement);
    expect(container.firstChild).not.toHaveClass('open');
  });
  
});
