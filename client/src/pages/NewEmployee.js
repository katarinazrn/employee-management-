import NewEmployee from "../components/new/NewEmployee";
import ContentLayout from "../components/UI/ContentLayout";

function NewEmployeePage() {

    return (
        <ContentLayout title='Add New Employee'>
            <NewEmployee />
        </ContentLayout>
    )
}
export default NewEmployeePage;