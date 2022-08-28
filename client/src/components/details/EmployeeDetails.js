import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../state";
import DeleteModal from "../delete/DeleteModal";
import ContentLayout from "../UI/ContentLayout";
import './EmployeeDetails.css';
import Contact from "./sections/Contact";
import Employment from "./sections/Employment";
import General from "./sections/General";
import Options from "./sections/Options";

function EmployeeDetails() {
    const params = useParams();
    const state = useSelector((state) => state.employee);
    const [employee, setEmployee] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { removeEmployee, fetchEmployees } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        if (!state.employees || state.employees.length == 0) fetchEmployees();
    }, [])

    useEffect(() => {
        setEmployee(state.employees.filter(em => em.id == params.id)[0]);
    }, [state.employees]);

    const onShowModal = () => {
        setShowModal(true);
    }

    const onHideModal = () => {
        setShowModal(false);
    }

    const deleteProfile = () => {
        removeEmployee(employee.id);
        onHideModal();
        navigate('/employees/all');
    }

    if (!employee) return <p>loading...</p>

    return (
        <ContentLayout title={employee.firstName + ' ' + employee.lastName}>
            <div className="d-flex justify-content-end">
                <Options showModal={onShowModal} employee={employee} />
            </div>
            <div className="row p-sm-3">
                <div className="col-sm-4 col-12 " >
                    <img className="img-fluid img-thumbnail" src={employee.profilePicture ? `http://localhost:3005/${employee.id}/${employee.profilePicture}` : '/placeholder.png'} alt={employee.firstName} />
                </div>
                <General employee={employee} />
            </div>
            <Employment employee={employee} />
            <Contact employee={employee} />
            <DeleteModal show={showModal} deleteProfile={deleteProfile} onHideModal={onHideModal} />
        </ContentLayout>
    )
}

export default EmployeeDetails;