import { Button, Form, Modal } from "react-bootstrap";

function Register(props) {
	return (
		<Modal {...props} size="sm" centered>
			<Modal.Body>
				<div className="form-title mb-3">
					<h4 className="text-yellow">Login</h4>
				</div>
				<div className="d-flex flex-column">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="email"
								className="form-control input-bg"
								placeholder="Email"
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Control
								type="password"
								className="form-control input-bg"
								placeholder="Password"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="text"
								className="form-control input-bg"
								placeholder="Full Name"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="text"
								className="form-control input-bg"
								placeholder="Gender"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control
								type="text"
								className="form-control input-bg"
								placeholder="Phone"
							/>
						</Form.Group>
						<Form.Group>
							<Form.Control as="select" className="input-bg">
								<option>As User</option>
								<option>As Partner</option>
							</Form.Control>
						</Form.Group>
						<Button variant="brown" className="btn btn-block btn-round">
							Login
						</Button>
					</Form>

					<div className="text-center text-muted delimiter mt-2 ">
						Already have an account ? klick {"\u00A0"}
						<a href="#" className="font-weight-bold text-muted">
							here
						</a>
						.
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default Register;
