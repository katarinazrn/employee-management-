import { screen, render, cleanup } from '@testing-library/react';

import DeleteModal from '../DeleteModal';

const showModal = true;
const onHideModal = () => { };
const deleteProfile = () => { };

afterEach(() => {
    cleanup();
})

test('should render DeleteModal component', () => {
    render(<DeleteModal show={showModal} deleteProfile={deleteProfile}
        onHideModal={onHideModal} />);
    const modalElement = screen.getByTestId('modal');
    expect(modalElement).toBeInTheDocument();
});

test('renders two buttons', () => {
    render(<DeleteModal show={showModal} deleteProfile={deleteProfile}
        onHideModal={onHideModal} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
});
