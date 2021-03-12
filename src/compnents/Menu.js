import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState } from "react";
import keranjang from "./img/keranjang.svg";
import user from "./img/user.svg";
import product from "./img/product.svg";
import logout from "./img/logout.svg";

export const LoginRegisterModal = () => {
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
// export const LoginRegister = () => {
// 	const location = useLocation();
// 	return (
// 		<div>
// 			<Nav>
// 				<li className="nav-link">
// 					<link to></link>
// 				</li>
// 				<li className="nav-link">
// 					<link></link>
// 				</li>
// 			</Nav>
// 		</div>
// 	);
// };
export const User = () => {
	return (
		<Nav>
			<li className="nav-item">
				<Link href="#" className="nav-link">
					<img src={keranjang} alt="" />
					{/* <!-- <span className="badge badge-pill badge-danger">1</span></a> --> */}
				</Link>
			</li>
			<li className="nav-item dropdown">
				<Link
					className="nav-item nav-link dropdown-toggle mr-md-2"
					href="#"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<img
						src="https://ui-avatars.com/api/?name=aa"
						alt="us"
						width="40"
						height="40"
						className="rounded-circle"
					/>
				</Link>
				<div className="dropdown-menu dropdown-menu-right menu">
					<NavDropdown.Item href="#action/3.1">
						<img src={user} alt="" className="dropdown-logo " /> Profile
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
						<img src={logout} alt="" className="dropdown-logo " /> logout
					</NavDropdown.Item>
				</div>
			</li>
		</Nav>
	);
};

export const Partner = () => {
	return (
		<Nav>
			<li className="nav-item dropdown">
				<Link
					className="nav-item nav-link dropdown-toggle mr-md-2"
					href="#"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				>
					<img
						src="https://ui-avatars.com/api/?name=aa"
						alt="US"
						width="40"
						height="40"
						className="rounded-circle"
					/>
				</Link>
				<div className="dropdown-menu dropdown-menu-right menu">
					<NavDropdown.Item href="#action/3.1">
						<img src={user} alt="" className="dropdown-logo " /> Profile Partner
					</NavDropdown.Item>
					<NavDropdown.Item href="#action/3.1">
						<img src={product} alt="" className="dropdown-logo " /> Add product
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="#action/3.4">
						<img src={logout} alt="" className="dropdown-logo " /> logout
					</NavDropdown.Item>
				</div>
			</li>
		</Nav>
	);
};
