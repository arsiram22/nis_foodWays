// import { useContext, useState } from "react";
// import { UserContext } from "../contexts/userContext";
// import { Modal, Button } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

// const Login = () => {
// 	const router = useHistory();
// 	const [state, dispatch] = useContext(UserContext);
// 	const [show, setShow] = useState(false);
// 	const [show2, setShow2] = useState(false);

// 	const LoginUser = () => {
// 		dispatch({
// 			type: "LOGIN_SUCCESS",
// 		});
// 		handleClose();
// 		router.push("/");
// 	};

// 	const handleClose = () => {
// 		setShow(false);
// 	};

// 	const handleClose2 = () => {
// 		setShow(false);
// 	};

// 	return (
// 		<div className="d-flex justify-content-center align-items-center vh-100 flex-column">
// 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// 			<button
// 				className="btn btn-primary btn-block"
// 				onClick={() => setShow(true)}
// 			>
// 				LOGIN
// 			</button>
// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Modal heading</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					Woohoo, you're reading this text in a modal!
// 					<h1
// 						onClick={() => {
// 							handleClose();
// 							setShow2(true);
// 						}}
// 					>
// 						go to register
// 					</h1>
// 				</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant="secondary" onClick={handleClose}>
// 						Close
// 					</Button>
// 					<Button variant="primary" onClick={LoginUser}>
// 						LOGIN
// 					</Button>
// 				</Modal.Footer>
// 			</Modal>

// 			<Modal show={show2} onHide={handleClose2}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Modal heading</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					Woohoo, you're reading this text in a modal!
// 					<h1
// 						onClick={() => {
// 							handleClose2();
// 							setShow(true);
// 						}}
// 					>
// 						go to login
// 					</h1>
// 				</Modal.Body>
// 				<Modal.Footer>
// 					<Button variant="secondary" onClick={handleClose2}>
// 						Close
// 					</Button>
// 					<Button variant="primary" onClick={LoginUser}>
// 						REGISTER
// 					</Button>
// 				</Modal.Footer>
// 			</Modal>

// 			<div className="mx-5">
// 				<Button variant="primary" onClick={LoginUser}>
// 					LOGIN
// 				</Button>
// 			</div>
// 			<div className="mx-5">
// 				<Button variant="primary" onClick={LoginUser}>
// 					LOGIN
// 				</Button>
// 			</div>
// 			<div className="mx-5">
// 				<Button variant="primary" onClick={LoginUser}>
// 					LOGIN
// 				</Button>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

// import { useContext, useState } from "react";
// import { AuthContext } from "../contexts/authContext";
// import { UserContext } from "../contexts/userContext";

// import { Button, Form, Modal } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";

// function Login() {
// 	const router = useHistory();
// 	const [state, dispatch] = useContext(UserContext);
// 	const LoginUser = () => {
// 		dispatch({
// 			type: "LOGIN",
// 		});
// 	};

// 	const handleClose = () => {
// 		dispatch({
// 			type: "LOGOUT",
// 		});
// 	};
// 	console.log(state.isLogin);

// 	return (
// 		<></>
// 		// <Modal show={state.isLogin} onHide={handleClose} size="sm" centered>
// 		// 	<Modal.Body>
// 		// 		<div className="form-title mb-3">
// 		// 			<h4 className="text-yellow">Login</h4>
// 		// 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// 		// 		</div>
// 		// 		<div className="d-flex flex-column">
// 		// 			<Form>
// 		// 				<Form.Group controlId="formBasicEmail">
// 		// 					<Form.Control
// 		// 						type="email"
// 		// 						className="form-control input-bg"
// 		// 						placeholder="Email"
// 		// 					/>
// 		// 				</Form.Group>

// 		// 				<Form.Group controlId="formBasicPassword">
// 		// 					<Form.Control
// 		// 						type="password"
// 		// 						className="form-control input-bg"
// 		// 						placeholder="Password"
// 		// 					/>
// 		// 				</Form.Group>
// 		// 				<Button
// 		// 					variant="brown"
// 		// 					className="btn btn-block btn-round"
// 		// 					onClick={LoginUser}
// 		// 				>
// 		// 					Login
// 		// 				</Button>
// 		// 			</Form>

// 		// 			<div className="text-center text-muted delimiter mt-2">
// 		// 				Don't have an account ? klick
// 		// 				<Link to="#" className="font-weight-bold text-muted">
// 		// 					{" "}
// 		// 					here
// 		// 				</Link>
// 		// 				.
// 		// 			</div>
// 		// 		</div>
// 		// 	</Modal.Body>
// 		// </Modal>
// 	);
// }
// export default Login;

import { useContext, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

import { Button, Form, Modal } from "react-bootstrap";

function Login(props) {
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Using Grid in Modal
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="show-grid">
				kljslkajsdlks sd as sds ds ds\
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
export default Login;
