import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state/index';
import { bindActionCreators } from 'redux';
import { useNavigate } from "react-router-dom";

function NewEmployee() {
    const dispatch = useDispatch();
    const { addEmployee } = bindActionCreators(actionCreators, dispatch);
    const navigate = useNavigate();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const jobTitleRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();
    const [image, setImage] = useState(null);
    const [isEmployed, setIsEmployed] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const jobName = jobTitleRef.current.value;
        const startDate = startDateRef.current.value;
        const endDate = endDateRef?.current?.value;
        const status = isEmployed ? 'active' : 'past';

        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('jobName', jobName);
        formData.append('startDate', startDate);
        formData.append('endDate', startDate);
        formData.append('status', status);

        addEmployee({ firstName, lastName, phone, email, jobName, status, startDate, endDate }, formData);
        navigate('/employees/all');
    }

    const handleFileInput = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-2">
                <label htmlFor="firstName">First Name</label>
                <input required className="form-control" ref={firstNameRef} id="firstName" type='text' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="lastName">Last Name</label>
                <input required className="form-control" ref={lastNameRef} id="lastName" type='text' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="phone">Phone</label>
                <input className="form-control" ref={phoneRef} id="phone" type='text' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="email">Email</label>
                <input required className="form-control" ref={emailRef} id="email" type='email' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="email">Job Title</label>
                <input required className="form-control" ref={jobTitleRef} id="jobTitle" type='text' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="email">Start Date</label>
                <input required className="form-control" ref={startDateRef} id="startDate" type='date' ></input>
            </div>
            <div className="form-group mt-2">
                <label htmlFor="email">Profile Picture</label>
                <input className="form-control" onChange={handleFileInput} id="image" type='file' ></input>
            </div>
            <div className="form-check mt-2">
                <input className="form-check-input" checked={isEmployed}
                    type="checkbox"
                    onChange={() => setIsEmployed(prev => !prev)}
                    id="status" />
                <label className="form-check-label" htmlFor="status">
                    Currently Employed
                </label>
            </div>
            {!isEmployed &&
                <div className="form-group mt-2">
                    <label htmlFor="email">End Of Employment Date</label>
                    <input required className="form-control" ref={endDateRef} id="endDate" type='date' ></input>
                </div>}
            <button type="submit" className="btn btn-primary m-3 ms-auto d-flex">
                Save
            </button>
        </form>
    )
}

export default NewEmployee;