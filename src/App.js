// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
	const [modalLogin, setModalLogin] = useState(false);
	const [modalRegister, setModalRegister] = useState(false);

	return (
		<div>
			<Button variant="primary" onClick={() => setModalLogin(true)}>
				Login
			</Button>
			<Button variant="primary" onClick={() => setModalRegister(true)}>
				Register
			</Button>

			<Login show={modalLogin} onHide={() => setModalLogin(false)} />
			<Register show={modalRegister} onHide={() => setModalRegister(false)} />
		</div>
	);
}

export default App;
