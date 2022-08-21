function ContentLayout(props) {
    return (
        <div className="col">
            <div className="container">
                <h4 className="text-capitalize pt-5 ps-5 pb-2 fw-bold">{props.title}</h4>
                <div className="content m-2 bg-white rounded shadow-sm p-md-5 p-2">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ContentLayout;