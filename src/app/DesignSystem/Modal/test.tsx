import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Modal from '.';

let stateModal = true
const onClosed = jest.fn()
const onOpened = jest.fn()
const onCloseModal = jest.fn(() => stateModal = false)


describe('Modal', () => {
  afterEach(() => {
    cleanup()
  }) 
  it('should render', () => {
    const { container } = render(<Modal open={stateModal} onClose={onCloseModal} title="modal">modal</Modal>);
    expect(container).toMatchSnapshot()
  });

  it('should not render', () => {
    const { container } = render(<Modal open={false} onClose={onCloseModal} title="modal">modal</Modal>);
    expect(container).toMatchSnapshot()
  });

  it('should on event close modal', async () => {
    render(<Modal open={stateModal} onClose={onCloseModal} onClosed={onClosed} title="modal">modal</Modal>);
    const buttonClose = await screen.findByRole('button', { name: 'close-modal'})
    fireEvent.click(buttonClose)
    expect(onClosed).toBeCalled()
  });

  it('should on event opened modal', async () => {
    render(<Modal open={true} onClose={onCloseModal} onOpened={onOpened} title="modal">modal</Modal>);
    await waitFor(() => expect(onOpened).toBeCalled())
  });
});
