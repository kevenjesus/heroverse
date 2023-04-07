import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Card from '.';
import { CardProps } from './types';

describe('Card component', () => {
  const cardData: CardProps = {
    id: 1,
    title: 'Test Title',
    description: 'Test Description',
    category: {
      label: 'Test Label',
      variant: 'primary',
    },
  };

  it('should render card title and description', () => {
    render(<Card {...cardData} />);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent('Test Title');
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render category label', () => {
    render(<Card {...cardData} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should render edit and delete buttons when actions are provided', () => {
    const mockActions = {
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    render(<Card {...cardData} actions={mockActions} />);
    expect(screen.getByAltText('Editar')).toBeInTheDocument();
    expect(screen.getByAltText('Excluir')).toBeInTheDocument();
  });

  it('should call onEdit when edit button is clicked', () => {
    const mockActions = {
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    render(<Card {...cardData} actions={mockActions} />);
    const editButton = screen.getByAltText('Editar');
    editButton.click();
    expect(mockActions.onEdit).toHaveBeenCalledTimes(1);
    expect(mockActions.onEdit).toHaveBeenCalledWith(1);
  });

  it('should call onDelete when delete button is clicked', () => {
    const mockActions = {
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    render(<Card {...cardData} actions={mockActions} />);
    const deleteButton = screen.getByAltText('Excluir');
    deleteButton.click();
    expect(mockActions.onDelete).toHaveBeenCalledTimes(1);
    expect(mockActions.onDelete).toHaveBeenCalledWith(1);
  });
});
