function Employment({ employee }) {
    return (
        <div className="mb-4" >
            <b className="m-1 border-bottom d-flex" >Employment Informations</b>
            <div className="row d-flex">
                {employee.jobName &&
                    <div className="col-sm">
                        <p className="p-1 d-flex text-truncate">
                            <span className="d-flex info">
                                <span className="material-icons text-muted">work</span>
                                <span className="text-muted pe-2">job title </span>
                            </span>
                            <span className="text-capitalize">{employee.jobName}</span>
                        </p>
                    </div>}
                <div className="col-sm">
                    <p className="p-1 d-flex text-truncate">
                        <span className="d-flex info">
                            <span className="material-icons text-muted">apartment</span>
                            <span className="text-muted pe-2">status </span>
                        </span>
                        <span className="text-capitalize">{employee.status}</span>
                    </p>
                </div>
                {employee.startDate &&
                    <div className="col-sm">
                        <p className="p-1 d-flex text-truncate ">
                            <span className="d-flex info">
                                <span className="material-icons text-muted">event_available</span>
                                <span className="text-muted pe-2">start date </span>
                            </span>
                            <span>{new Date(employee.startDate).toLocaleDateString()}</span>
                        </p>
                    </div>}
                {employee.endDate &&
                    <div className="col-sm">
                        <p className="p-1 d-flex  text-truncate ">
                            <span className="d-flex info ">
                                <span className="material-icons text-muted">event_busy</span>
                                <span className="text-muted pe-2">employement end </span>
                            </span>
                            <span>{new Date(employee.endDate).toLocaleDateString()}</span>
                        </p>
                    </div>}
            </div>
        </div>
    )
}

export default Employment;