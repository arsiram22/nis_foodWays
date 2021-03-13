import { Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";

import Login from "../pages/Login";
import Register from "../pages/Register";

import keranjang from "./img/keranjang.svg";
import user from "./img/user.svg";
import product from "./img/product.svg";
import logout from "./img/logout.svg";
import { Link } from "react-router-dom";

export const LoginRegister = () => {
	const [modalLogin, setModalLogin] = useState(false);
	const [modalRegister, setModalRegister] = useState(false);
	return (
		<div>
			<Nav>
				<li className="nav-link">
					<button
						className="btn btn-brown btn-sm"
						onClick={() => setModalLogin(true)}
					>
						Login
					</button>
				</li>
				<li className="nav-link">
					<button
						className="btn btn-brown btn-sm"
						onClick={() => setModalRegister(true)}
					>
						Register
					</button>
				</li>
			</Nav>
			<Login show={modalLogin} onHide={() => setModalLogin(false)} />
			<Register show={modalRegister} onHide={() => setModalRegister(false)} />
		</div>
	);
};
export const User = () => {
	return (
		<>
			<Nav.Link as={Link} to="/cart">
				<img src={keranjang} alt="" className="thumbnail-image" />
				{/* <!-- <span className="badge badge-pill badge-danger">1</span></a> --> */}
			</Nav.Link>
			<NavDropdown
				// eventKey={1}
				title={
					<div className="pull-left">
						<img
							className="thumbnail-image rounded-circle"
							src="https://ui-avatars.com/api/?name=aa"
							alt="user pic"
							width="40"
							height="40"
						/>
					</div>
				}
				id="basic-nav-dropdown"
				alignRight
				// className="dropdown-menu-right menu"
			>
				<Link to="/profile" className="dropdown-item">
					<img src={user} alt="" className="dropdown-logo " /> Profile
				</Link>

				<NavDropdown.Divider />
				<Link to="/logout" className="dropdown-item">
					<img src={logout} alt="" className="dropdown-logo " /> logout
				</Link>
			</NavDropdown>
		</>
	);
};

export const Partner = () => {
	return (
		<NavDropdown
			// eventKey={1}
			title={
				<div className="pull-left">
					<img
						className="thumbnail-image rounded-circle"
						src="https://ui-avatars.com/api/?name=aa"
						alt="user pic"
						width="40"
						height="40"
					/>
				</div>
			}
			id="basic-nav-dropdown"
			alignRight
			// className="dropdown-menu-right menu"
		>
			<Link to="/profile" className="dropdown-item">
				<img src={user} alt="" className="dropdown-logo " /> Profile Partner
			</Link>
			<Link to="/product/add" className="dropdown-item">
				<img src={product} alt="" className="dropdown-logo " /> Add product
			</Link>
			<NavDropdown.Divider />
			<Link to="/logout" className="dropdown-item">
				<img src={logout} alt="" className="dropdown-logo " /> logout
			</Link>
		</NavDropdown>
	);
};
