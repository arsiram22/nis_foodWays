import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "./compnents/Nav";

function App() {
	const [modalLogin, setModalLogin] = useState(false);
	const [modalRegister, setModalRegister] = useState(false);

	return (
		<Router>
			<Nav />
			<div className="container">
				<Switch>
					{/* <Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/product/:id" component={Detail} /> */}
				</Switch>
			</div>
		</Router>
		// <div>
		// 	<Button variant="primary" onClick={() => setModalLogin(true)}>
		// 		Login
		// 	</Button>
		// 	<Button variant="primary" onClick={() => setModalRegister(true)}>
		// 		Register
		// 	</Button>

		// 	<Login show={modalLogin} onHide={() => setModalLogin(false)} />
		// 	<Register show={modalRegister} onHide={() => setModalRegister(false)} />
		// </div>
	);
}

export default App;
