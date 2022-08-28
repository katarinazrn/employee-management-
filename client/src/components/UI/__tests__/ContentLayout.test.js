import { screen, render, cleanup } from '@testing-library/react';
import ContentLayout from '../ContentLayout';

afterEach(() => {
    cleanup();
})

test('renders component', () => {
    render(<ContentLayout title='test title' >test content</ContentLayout>);
    const element = screen.getByTestId('content');
    expect(element).toBeInTheDocument();
})

test('displays title and content', () => {
    render(<ContentLayout title='test title' >test content</ContentLayout>);
    const element = screen.getByTestId('content');

    const children = screen.getByText('test content');
    expect(children).toBeInTheDocument();

    const title = screen.getByText('test title');
    expect(title).toBeInTheDocument();
})