import { Button, Form, Modal } from 'react-bootstrap';

function Login(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body >

            <div className="form-title mb-3">
                <h4 className="text-yellow">Login</h4>
            </div>
            <div className="d-flex flex-column">
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" className="form-control input-bg" placeholder="Email"/>
                    
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" className="form-control input-bg" placeholder="Password" />
                </Form.Group>
                <Button variant="brown" className="btn btn-block btn-round">Login</Button>
                </Form>
                
                <div className="text-center text-muted delimiter mt-2">Don't have an account ? klick<a href="#" className="text-brown "> here</a>.</div>
            </div>
             
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
export default Login;