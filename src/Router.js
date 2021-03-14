import React from "react";
import { Switch, Route } from "react-router-dom";

import { KeranjangContextProvider } from "./contexts/keranjangContext";
import { AuthContextProvaider } from "./contexts/authContext";
import { UserContextProvider } from "./contexts/userContext";

import Navigation from "./compnents/Nav";

import Test from "./pages/Test";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import EditProfile from "./pages/EditProfile";
import AddProduct from "./pages/AddProduct";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function MasterRoute() {
	return (
		<UserContextProvider>
			<AuthContextProvaider>
				<KeranjangContextProvider>
					<Navigation />
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
						{/* <Route exact path="/product">
							<Product />
						</Route> */}
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
						<Route exact path="/test">
							<Test />
						</Route>
					</Switch>
					<Register />
					<Login />
				</KeranjangContextProvider>
			</AuthContextProvaider>
		</UserContextProvider>
	);
}
