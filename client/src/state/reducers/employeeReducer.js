const reducer = (state = { employees: [] }, action) => {
    let newState;
    switch (action.type) {
        case 'fetchEmployees':
            return { ...state, employees: action.payload, filtered: [], isFiltering: false }
        case 'addEmployee':
            newState = { ...state };
            newState.employees.push(action.payload);
            console.log(newState)
            return newState;
        case 'removeEmployee':
            newState = { ...state };
            newState.employees = newState.employees.filter(e => e.id !== action.payload);
            return newState;
        case 'updateEmployee':
            newState = { ...state };
            newState.employees = newState.employees.map(e => {
                if (e.id == action.payload.id) return action.payload;
                else return e;
            });
            return newState;
        case 'isFiltering':
            newState = { ...state };
            newState.isFiltering = action.payload;
            return newState;
        case 'filterEmployees':
            let term = action.payload.toLowerCase();
            newState = { ...state };
            newState.filtered = newState.employees.filter(em => em.firstName.toLowerCase().includes(term) || em.lastName.toLowerCase().includes(term));
            return newState;
        default:
            return state;
    }
}

export default reducer;