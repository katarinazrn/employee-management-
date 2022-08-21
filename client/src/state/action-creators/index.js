export const fetchEmployees = () => {

    return (dispatch) => {
        return fetch('http://localhost:3005/api/employees/').then(res => {
            if (res.status === 404) {
                return dispatch({
                    type: ''
                })
            }
            else return res.json();
        }).then(data => {
            return dispatch({
                type: 'fetchEmployees',
                payload: data
            })
        })
    }
}

export const addEmployee = (newEmployee, formData) => {

    return (dispatch) => {
        return fetch('http://localhost:3005/api/employee/', {
            method: 'POST',
            body: formData,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            let type = res.status === 201 ? 'addEmployee' : '';
            return dispatch({
                type: type,
                payload: newEmployee
            })
        })
    }
}

export const removeEmployee = (id) => {
    return (dispatch) => {
        return fetch(`http://localhost:3005/api/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            let type = res.status === 200 ? 'removeEmployee' : '';
            return dispatch({
                type: type,
                payload: id
            })
        })
    }
}

export const updateEmployee = (employee, formData) => {

    return (dispatch) => {
        return fetch(`http://localhost:3005/api/employee/${employee.id}`, {
            method: 'put',
            body: formData,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => {
            console.log(res.status)
            let type = res.status === 204 ? 'updateEmployee' : '';
            return dispatch({
                type: type,
                payload: employee
            })
        })

    }
}


export const filterEmployees = (term) => {

    return (dispatch) => {
        return dispatch({
            type: 'filterEmployees',
            payload: term
        })
    }
}

export const isFiltering = (value) => {

    return (dispatch) => {
        return dispatch({
            type: 'isFiltering',
            payload: value
        })
    }
}