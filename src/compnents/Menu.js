import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const menu = () => {
	return;
	<div>
		{/* <Nav.Link as={Link} to="/" className="text-light">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/about" className="text-light">
						About
					</Nav.Link>
					<Nav.Link as={Link} to="/login" className="text-light">
						Login
					</Nav.Link> */}
		<li class="nav-link">
			<a class="btn btn-brown btn-sm" href="#">
				Register
			</a>
		</li>
		<Nav.Link className="text-light btn-brown btn-sm">Login</Nav.Link>
	</div>;
};

export default menu;

// export const isLogin = () => {
// 	return (
// 		<div>
// 			<li class="nav-link">
// 				<a class="btn btn-brown btn-sm" href="#">
// 					Register
// 				</a>
// 			</li>
// 			<Nav.Link className="text-light">Login</Nav.Link>
// 		</div>
// 	);
// };
// export const isLogout = () => {
// 	return <div></div>;
// };
