import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

import { Button, Form, Modal } from "react-bootstrap";

function Login() {
	const [state, dispatch] = useContext(AuthContext);
	const LoginUser = () => {
		dispatch({
			type: "LOGIN",
		});
	};

	const handleClose = () => {
		dispatch({
			type: "MODAL_LOGIN_CLOSE",
		});
	};
	const handleOpenRegister = () => {
		handleClose();
		dispatch({
			type: "MODAL_REGISTER_OPEN",
		});
	};
	// console.log("login", state);
	return (
		<Modal show={state.modalLogin} onHide={handleClose} size="sm" centered>
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
						<Button
							variant="brown"
							className="btn btn-block btn-round"
							onClick={LoginUser}
						>
							Login
						</Button>
					</Form>

					<div className="text-center text-muted delimiter mt-2">
						Don't have an account ? klick
						<Link
							to="#"
							onClick={handleOpenRegister}
							className="font-weight-bold text-muted"
						>
							here
						</Link>
						.
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}
export default Login;
