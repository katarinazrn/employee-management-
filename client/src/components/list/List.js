import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index';
import SearchBar from "../search/SearchBar";
import ListItem from "./listItem/ListItem";

function List() {

    const params = useParams();
    const state = useSelector((state) => state.employee);
    const [employees, setEmployees] = useState([]);
    const dispatch = useDispatch();
    const { fetchEmployees } = bindActionCreators(actionCreators, dispatch);


    useEffect(() => {
        fetchEmployees();
    }, [params.type]);

    useEffect(() => {
        let allEmployees = state.employees;
        if (state.isFiltering) {
            allEmployees = state.filtered;
        }

        if (params.type == 'all') setEmployees(allEmployees);
        else if (params.type == 'current') setEmployees(allEmployees.filter(e => e.status == 'active'));
        else if (params.type == 'past') setEmployees(allEmployees.filter(e => e.status != 'active'));
    }, [state.employees, state.isFiltering, state.filtered])

    let content;
    if (employees.length == 0 && !state.isFiltering) content = <p>There are no {params.type} employees!</p>;
    else if (employees.length == 0 && state.isFiltering) content = <p>No results</p>;
    else content = <ul className="list-group">
        {employees.map(em => <ListItem key={em.id} employee={em} />)}
    </ul>

    return (
        <div>
            <SearchBar />
            {content}
        </div>
    )
}

export default List;