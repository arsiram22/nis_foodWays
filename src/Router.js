import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { KeranjangContextProvider } from "./contexts/keranjangContext";

import Modals from "./compnents/Modals";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import EditProfile from "./pages/EditProfile";
import AddProduct from "./pages/AddProduct";
import Transaction from "./pages/Transaction";

export default function MasterRoute() {
	// const location = useLocation();
	// const background = location.state && location.state.background;

	return (
		<KeranjangContextProvider>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/profile">
					<Profile />
				</Route>
				<Route exact path="/Cart">
					<Cart />
				</Route>
				<Route exact path="/product">
					<Product />
				</Route>
				<Route exact path="/product/add">
					<AddProduct />
				</Route>
				<Route exact path="/profile/edit">
					<EditProfile />
				</Route>
				<Route exact path="/transaction">
					<Transaction />
				</Route>
				<Route exact path="/market/:id">
					<Product />
				</Route>
			</Switch>
			{/* <ModalRoute /> */}
		</KeranjangContextProvider>
	);
}

// function ModalRoute() {
// 	const location = useLocation();
// 	const background = location.state && location.state.background;

// 	return (
// 		<>
// 			<Switch location={background || location}>
// 				<Route path="/" component={Home} />
// 				<Route path="/test" component={Test} />
// 			</Switch>

// 			{background && <Route path="/login/:name" children={<Modals />} />}
// 		</>
// 	);
// }
