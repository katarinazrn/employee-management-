import { render as rtlRender, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../state/store';
import SearchBar from '../SearchBar';
afterEach(() => {
    cleanup();
})

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

test('renders component', () => {
    render(<SearchBar />);
    const element = screen.getByTestId('search-bar');
    expect(element).toBeInTheDocument();
})


test('renders input field with value of empty string', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search for employee...');
    expect(input.value).toBe('');
    expect(input).toBeInTheDocument();
})