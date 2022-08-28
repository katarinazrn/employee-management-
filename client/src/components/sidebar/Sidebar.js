import { useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {

    const [showMobileMenu, setShowMobileMenu] = useState(null);
    const toggleMenu = () => {
        setShowMobileMenu(prev => !prev);
    }

    return (
        <nav test-dataid='sidebar' className='position-fixed col-sm-12 col-md-3 bg-dark d-flex flex-column shadow-sm' >
            <div className="d-flex justify-content-between">
                <Link to='/' className="logo text-light p-1 p-md-2 h4 text-left text-decoration-none">Employee management</Link>
                <button onClick={toggleMenu} className="d-block d-md-none border-0 bg-transparent material-icons text-light ">menu</button>
            </div>
            <ul className={`list-group m-0 p-0 mt-md-5 flex-column d-md-flex ${showMobileMenu || showMobileMenu == null ? 'd-none' : ''}`}>
                <li className="p-2 m-2 rounded">
                    <Link className="text-decoration-none fw-bold text-light d-flex" to='/employees/current'>
                        <span className="material-icons me-2">group</span><span>Current Employees</span>
                    </Link>
                </li>
                <li className="p-2 m-2 rounded">
                    <Link className="text-decoration-none fw-bold text-light d-flex" to='/employees/past'>
                        <span className="material-icons me-2">person_off</span><span>Past Employees</span>
                    </Link>
                </li>
                <li className="p-2 m-2 rounded">
                    <Link className="text-decoration-none fw-bold text-light d-flex" to='/employees/all'>
                        <span className="material-icons me-2">groups</span><span>All Employees</span>
                    </Link>
                </li>
                <li className="p-2 m-2 rounded">
                    <Link className="text-decoration-none fw-bold text-light d-flex" to='/new'>
                        <span className="material-icons me-2">person_add</span><span>Add Employee</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;