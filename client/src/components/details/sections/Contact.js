function Contact({ employee }) {
    return (
        <div>
            <b className="m-1 border-bottom d-flex">Contact Informations</b>
            <div className="row d-flex">
                <div className="col-sm">
                    <p className="p-1 d-flex  text-truncate ">
                        <span className="d-flex info">
                            <span className="material-icons text-muted">mail</span>
                            <span className="text-muted pe-2">email </span>
                        </span>
                        <span >{employee.email}</span>
                    </p>
                </div>
                {employee.phone &&
                    <div className="col-sm">
                        <p className="p-1 d-flex  text-truncate ">
                            <span className="d-flex info">
                                <span className="material-icons text-muted">phone</span>
                                <span className="text-muted pe-2">phone </span>
                            </span>
                            <span>{employee.phone}</span>
                        </p>
                    </div>}
            </div>
        </div>
    )
}

export default Contact;