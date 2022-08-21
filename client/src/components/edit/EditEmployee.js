import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../state/index';
import { bindActionCreators } from 'redux';
import { useNavigate, useParams } from "react-router-dom";
import moment from 'moment';

function EditEmployee() {
    const dispatch = useDispatch();
    const { updateEmployee, fetchEmployees } = bindActionCreators(actionCreators, dispatch);

    const state = useSelector(state => state.employee);
    const navigate = useNavigate();

    const params = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [jobName, setJobName] = useState('');
    const [id, setId] = useState(-1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [image, setImage] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    useEffect(() => {

        let employee = state.employees.filter(em => em.id == params.id)[0];
        if (employee) {
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setPhone(employee.phone);
            setEmail(employee.email);
            setStatus(employee.status);
            setJobName(employee.jobName);
            setProfilePicture(employee.profilePicture);
            setStartDate(moment(employee.startDate).format('YYYY-MM-DD'));
            setEndDate(moment(employee.endDate).format('YYYY-MM-DD'));
            setId(employee.id);
        }

    }, [state.employees]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('jobName', jobName);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('status', status);
        formData.append('profilePicture', profilePicture);
        formData.append('id', id);

        updateEmployee({ firstName, lastName, phone, email, status, jobName, id, startDate, endDate, profilePicture }, formData);
        navigate('/employee/' + id);
    }

    const handleFileInput = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-2">
                    <label htmlFor="firstName">First Name</label>
                    <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="firstName" type='text' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} id="lastName" type='text' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="phone">Phone</label>
                    <input className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type='text' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="email" type='email' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Job Title</label>
                    <input className="form-control" value={jobName} onChange={(e) => setJobName(e.target.value)} id="email" type='text' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Start Date</label>
                    <input required className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} id="startDate" type='date' ></input>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="email">Profile Picture</label>
                    <input className="form-control" onChange={handleFileInput} id="image" type='file' ></input>
                </div>
                <div className="form-check mt-2">
                    <input className="form-check-input" checked={status === 'active' ? 'checked' : ''} type="checkbox" onChange={(e) => setStatus(prev => prev == 'active' ? 'past' : 'active')} value={status} id="status" />
                    <label className="form-check-label" htmlFor="status">
                        Currently Employed
                    </label>
                </div>
                {status != 'active' &&
                    <div className="form-group mt-2">
                        <label htmlFor="email">End Of Employment Date</label>
                        <input required className="form-control" value={endDate} onChange={(e) => setEndDate(e.target.value)} id="startDate" type='date' ></input>
                    </div>}
                <button type="submit" className="btn btn-primary m-3 ms-auto d-flex">Save Changes</button>
            </form>
        </div>
    )
}

export default EditEmployee;