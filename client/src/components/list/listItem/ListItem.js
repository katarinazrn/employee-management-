import { Link } from 'react-router-dom';
import './ListItem.css';

function ListItem({ employee }) {

    return (
        <li className="list-group-item d-flex justify-content-between" key={employee.id}>

            <Link to={`/employee/${employee.id}`} className='d-flex text-capitalize text-decoration-none text-dark'>
                <div className="image-round d-flex justify-content-center m-1"
                    style={{ backgroundImage: employee.profilePicture ? `url(http://localhost:3005/${employee.id}/${employee.profilePicture})` : 'url("/placeholder.png")' }} ></div>
                <strong className=' ms-3 mt-auto mb-auto'>{employee.firstName} {employee.lastName}</strong>
            </Link>
            <span className='mt-auto mb-auto'>{employee.jobName}</span>
            <div className="d-flex  mt-auto mb-auto text-muted opacity-50">
                <Link to={`/employee/${employee.id}`} className='text-decoration-none d-flex text-muted'>
                    <span className="material-icons ms-2">info</span>
                </Link>
                <Link to={`/edit/${employee.id}`} className='text-decoration-none d-flex text-muted'>
                    <span className="material-icons ms-2">edit</span>
                </Link>
            </div>
        </li>
    )
}

export default ListItem;