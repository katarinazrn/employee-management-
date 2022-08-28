import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function DeleteModal(props) {

    return (
        <Modal data-testid='modal' show={props.show} onHide={props.onHideModal}>
            <Modal.Body>Are you sure you want to delete this profile?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHideModal}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={props.deleteProfile}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default DeleteModal;