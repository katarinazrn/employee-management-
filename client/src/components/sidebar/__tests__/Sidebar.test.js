import { screen, render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Sidebar from '../Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
    cleanup();
})

test('renders component and all links', () => {
    render(<Router><Sidebar /></Router>);
    let links = screen.getAllByRole('link');
    expect(links).toHaveLength(5);
})
