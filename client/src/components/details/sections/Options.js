import { Link } from "react-router-dom";

function Options({ employee, showModal }) {

    return (
        <div className="d-flex flex-column text-end mb-2 ">
            <Link to={`/edit/${employee.id}`} className='text-decoration-none justify-content-end d-flex text-muted'>
                <span>edit profile</span>
                <span className="material-icons ms-2">edit</span>
            </Link>
            <button onClick={showModal} className='text-decoration-none justify-content-end d-flex text-muted border-0 bg-transparent'>
                <span>delete profile</span>
                <span className="material-icons ms-2">delete</span>
            </button>
        </div>
    )
}

export default Options;