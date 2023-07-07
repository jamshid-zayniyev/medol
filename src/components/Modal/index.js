import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Translate from '../../utils/Translate';
import styles from "../../style/modal.module.css"
function MyVerticallyCenteredModal(props) {
    
    console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Medol
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.modal}>
            <div>
            <h4>
                {(props.data && props.data.title ) ? <Translate dictionary={props.data.title.props.dictionary}/> : ""}
                </h4>
                <p>
                {(props.data && props.data.date ) ? props.data.date : ""}
                </p>
        <p>
        {(props.data && props.data.description) ?   <Translate dictionary={props.data.description.props.dictionary}/> : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi accusamus quam, omnis quas impedit voluptate blanditiis. Cum, ducimus libero. Assumenda id eveniet mollitia ratione voluptatem. Est, dignissimos. Magni eum aspernatur sit itaque amet magnam quis dolorum cum impedit quos praesentium vitae temporibus iure dolores perspiciatis earum, reiciendis harum quaerat?"}
        </p>
            </div>
            <div>
                {(props.data && props.data.img ? <img src={props?.data?.img} alt="imgmodal" className={styles.modalimg} />:"" ) }
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className={styles.closeBtn}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal
// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);