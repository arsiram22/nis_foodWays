import { Navbar, Nav, Image } from "react-bootstrap";
import { useState } from "react";
import logo from "../compnents/img/logo.svg";
import Login from "../pages/Login";
import Register from "../pages/Register";

const NavbarComponent = () => {
	const [modalLogin, setModalLogin] = useState(false);
	const [modalRegister, setModalRegister] = useState(false);
	return (
		<Navbar bg="dark " className="fixed-top bg-yellow">
			<Navbar.Brand href="#home" className="title-ways text-brown">
				WaysFood
				<Image src={logo} alt="WF" className="ml-2" />
			</Navbar.Brand>
			<Navbar.Collapse id="basic-navbar-nav" className=""></Navbar.Collapse>
			<Nav>
				<li className="nav-link">
					<a
						className="btn btn-brown btn-sm"
						onClick={() => setModalLogin(true)}
					>
						Login
					</a>
				</li>
				<li className="nav-link">
					<a
						className="btn btn-brown btn-sm"
						onClick={() => setModalRegister(true)}
					>
						Register
					</a>
				</li>
			</Nav>
			<Login show={modalLogin} onHide={() => setModalLogin(false)} />
			<Register show={modalRegister} onHide={() => setModalRegister(false)} />
		</Navbar>
	);
};

export default NavbarComponent;
