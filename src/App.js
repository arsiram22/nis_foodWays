import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
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
	);
}

export default App;
