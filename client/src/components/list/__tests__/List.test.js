import { render as rtlRender, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../state/store";
import List from "../List";


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
    useParams: () => ({
        type: 'all'
    }),
    useRouteMatch: () => ({ url: '/all' }),
}));

test("renders component", () => {
    render(<List />);
    const element = screen.getByTestId('list');
    expect(element).toBeInTheDocument();
});

test("should show message: There are no all employees!", () => {
    render(<List />);
    const message = screen.getByText('There are no all employees!');
    expect(message).toBeInTheDocument();
})