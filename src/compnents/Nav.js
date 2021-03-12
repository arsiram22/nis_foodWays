import { Navbar, Image } from "react-bootstrap";
import logo from "../compnents/img/logo.svg";
import { LoginRegister, User, Partner } from "./Menu";

const NavbarComponent = () => {
	return (
		<Navbar bg="dark " className="fixed-top bg-yellow">
			<Navbar.Brand href="#home" className="title-ways text-brown">
				WaysFood
				<Image src={logo} alt="WF" className="ml-2" />
			</Navbar.Brand>
			<Navbar.Collapse id="basic-navbar-nav" className=""></Navbar.Collapse>
			<LoginRegister />
			<User />

			<Partner />
		</Navbar>
	);
};

export default NavbarComponent;
