import { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

import { AuthContext } from "../contexts/authContext";
import { KeranjangContext } from "../contexts/keranjangContext";

import keranjang from "./img/keranjang.svg";
import user from "./img/user.svg";
import product from "./img/product.svg";
import logout from "./img/logout.svg";

const Menu = () => {
	return (
		<>
			<LoginRegister />
		</>
	);
};

export default Menu;

export const LoginRegister = () => {
	const [state, dispatch] = useContext(AuthContext);
	const handleOpenLogin = () => {
		dispatch({
			type: "MODAL_LOGIN_OPEN",
		});
	};
	const handleOpenRegister = () => {
		dispatch({
			type: "MODAL_REGISTER_OPEN",
		});
	};
	return (
		<div>
			<Nav>
				<li className="nav-link">
					<button className="btn btn-brown btn-sm" onClick={handleOpenLogin}>
						Login
					</button>
				</li>
				<li className="nav-link">
					<button className="btn btn-brown btn-sm" onClick={handleOpenRegister}>
						Register
					</button>
				</li>
			</Nav>
		</div>
	);
};

export const User = () => {
	const [state, dispatch] = useContext(KeranjangContext);

	return (
		<>
			<Nav.Link as={Link} to="/cart">
				<img src={keranjang} alt="" className="thumbnail-image" />
				{state.carts.length ? (
					<span className="badge badge-pill badge-danger rounded-pill position-absolute top-0 start-0">
						{state.carts.length}
					</span>
				) : (
					""
				)}
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
