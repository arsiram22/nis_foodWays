import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Router";
import Navigation from "./compnents/Nav";

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Routing />
			</Router>
		</>
	);
}

export default App;
