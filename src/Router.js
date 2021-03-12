import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Modals from "./compnents/Modals";
import Product from "./pages/Product";
import Profile from "./pages/Profile";

// import Contacts from "./Contacts";

// import "bootstrap/dist/css/bootstrap.min.css" pake tailwind di css

export default function MasterRoute() {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<>
			{/* <Route path="/" component={Home} /> */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/market/:id" component={Product} />
			</Switch>
			{/* <ModalRoute /> */}
		</>
	);
}

function ModalRoute() {
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<>
			<Switch location={background || location}>
				<Route path="/" component={Home} />
				<Route path="/test" component={Test} />
			</Switch>

			{background && <Route path="/login/:name" children={<Modals />} />}
		</>
	);
}
