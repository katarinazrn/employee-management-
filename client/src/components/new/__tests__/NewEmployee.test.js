import { render as rtlRender, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../state/store';
import NewEmployee from '../NewEmployee';


afterEach(() => {
    cleanup();
})

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => { }
}));

test('renders component', () => {
    render(<NewEmployee />);
    const element = screen.getByTestId('new');
    expect(element).toBeInTheDocument();
})

test('renders form with 8 input fields', () => {
    render(<NewEmployee />);
    const element = screen.getByTestId('new');
    const inputs = element.querySelectorAll('input');
    expect(inputs).toHaveLength(8);
})

test('does not render input field for end of employement date', () => {
    render(<NewEmployee />);
    const element = screen.getByTestId('new');
    const input = element.querySelector('#endDate');
    expect(input).not.toBeInTheDocument();
})