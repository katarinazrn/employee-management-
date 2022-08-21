import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state";

function SearchBar() {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const { filterEmployees, isFiltering } = bindActionCreators(actionCreators, dispatch);

    const handleInput = (e) => {
        let value = e.target.value;
        setTerm(value);

        if (value.trim() != '') {

            isFiltering(true);
            filterEmployees(value);
        }
        else {
            isFiltering(false);
        }

    }

    return (
        <div className="form-group mb-4">
            <input placeholder="Search for employee..." className="form-control" type='text' value={term} onChange={handleInput} />
        </div>
    )
}

export default SearchBar;