import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../compnents/img/logo.svg";

const NavbarComponent = () => {
	return (
		<Navbar bg="dark " expand="lg" className="fixed-top bg-yellow">
			<Navbar.Brand href="#home" className="title-ways text-brown">
				WaysFood
				<Image src={logo} alt="WF" className="ml-2" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto ">
					{/* <Nav.Link as={Link} to="/" className="text-light">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="text-light">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/login" className="text-light">
						Login
					</Nav.Link> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarComponent;
