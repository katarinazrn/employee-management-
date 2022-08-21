function General({ employee }) {
    return (
        <div className="col-sm-8 col-12 mt-2 mb-2">
            <b className="mb-2 mt-2 border-bottom d-flex" >General Informations</b>
            <p className="p-1 d-flex">
                <span className="d-flex info">
                    <span className="material-icons text-muted">numbers</span>
                    <span className="text-muted pe-2">id </span>
                </span>
                <span >{employee.id}</span>
            </p>
            <p className="p-1 d-flex">
                <span className="d-flex info">
                    <span className="material-icons text-muted">badge</span>
                    <span className="text-muted pe-2 text-truncate">first name </span>
                </span>
                <span className="text-capitalize">{employee.firstName}</span>
            </p>
            <p className="p-1 d-flex">
                <span className="d-flex info">
                    <span className="material-icons text-muted">supervised_user_circle</span>
                    <span className="text-muted pe-2 text-truncate">last name </span>
                </span>
                <span className="text-capitalize">{employee.lastName}</span>
            </p>

        </div>
    )
}

export default General;