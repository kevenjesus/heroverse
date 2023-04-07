import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';
import { TextFieldInputProps } from './types';
import '@testing-library/jest-dom';
import { createEvent } from '@testing-library/dom';

describe('TextField', () => {
  const onChangeMock = jest.fn();
  const props: TextFieldInputProps = {
    name: 'test-field',
    onChange: onChangeMock,
    value: '',
    type: 'text',
    placeholder: 'Enter your text here',
  };

  it('should render the component', () => {
    const { container } = render(<TextField {...props} />);
    expect(container).toMatchSnapshot();
  });

  
  it('should call onChange when input value changes', () => {
    const onChangeMock = jest.fn();
    render(<TextField type="text" value="test" name="test-field" placeholder="Enter your text here" onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');
  
    fireEvent(input, createEvent.change(input, { target: { value: 'Test Value' } }));
  
    expect(onChangeMock).toHaveBeenCalled()
  });
  

  it('should have correct placeholder attribute', () => {
    const { getByPlaceholderText } = render(<TextField {...props} />);
    const input = getByPlaceholderText('Enter your text here');

    expect(input).toBeInTheDocument();
  });
});
