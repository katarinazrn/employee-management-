import { useParams } from "react-router-dom";
import List from "../components/list/List";
import ContentLayout from "../components/UI/ContentLayout";

function Employees() {
    const params = useParams();

    return (
        <ContentLayout title={params.type + ' Employees'}>
            <List />
        </ContentLayout>
    )

}

export default Employees;