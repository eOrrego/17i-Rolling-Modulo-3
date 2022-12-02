import Modal from 'react-bootstrap/Modal';

const ModalCustom = ({show, title, handleClose, FormRegister}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormRegister />
        </Modal.Body>
      </Modal>
  )
}

export default ModalCustom