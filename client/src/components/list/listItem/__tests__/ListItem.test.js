import { render, screen, cleanup } from "@testing-library/react";
import ListItem from "../ListItem";
import { BrowserRouter as Router } from 'react-router-dom';

const employee = {
    firstName: 'Mike',
    lastName: 'Jonson',
    email: 'mike@mike.com',
    phone: '+12345',
    profilePicture: null,
    startDate: new Date(),
    status: 'active',
    jobName: 'project manager'
}

afterEach(() => {
    cleanup();
})

test("renders component", () => {
    render(<Router><ListItem employee={employee} /></Router>);
    const element = screen.getByText('Mike Jonson');
    expect(element).toBeInTheDocument();
});

test("renders employee job title", () => {
    render(<Router><ListItem employee={employee} /></Router>);
    const element = screen.getByText('project manager');
    expect(element).toBeInTheDocument();
});

test('renders options', () => {
    render(<Router><ListItem employee={employee} /></Router>);
    const editOption = screen.getByText('edit');
    const viewOption = screen.getByText('info');
    expect(editOption).toBeInTheDocument();
    expect(viewOption).toBeInTheDocument();
})

test('shows image placeholder', () => {
    render(<Router><ListItem employee={employee} /></Router>);
    const imageElement = screen.getByTestId('profilePicture');
    expect(imageElement.style.backgroundImage.includes('placeholder.png')).toBe(true);
})