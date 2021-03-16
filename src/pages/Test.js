// // // import { useContext, useState } from "react";
// // // import { UserContext } from "../contexts/userContext";
// // // import { Modal, Button } from "react-bootstrap";
// // // import { useHistory } from "react-router-dom";

// // // const Login = () => {
// // // 	const router = useHistory();
// // // 	const [state, dispatch] = useContext(UserContext);
// // // 	const [show, setShow] = useState(false);
// // // 	const [show2, setShow2] = useState(false);

// // // 	const LoginUser = () => {
// // // 		dispatch({
// // // 			type: "LOGIN_SUCCESS",
// // // 		});
// // // 		handleClose();
// // // 		router.push("/");
// // // 	};

// // // 	const handleClose = () => {
// // // 		setShow(false);
// // // 	};

// // // 	const handleClose2 = () => {
// // // 		setShow(false);
// // // 	};

// // // 	return (
// // // 		<div className="d-flex justify-content-center align-items-center vh-100 flex-column">
// // // 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// // // 			<button
// // // 				className="btn btn-primary btn-block"
// // // 				onClick={() => setShow(true)}
// // // 			>
// // // 				LOGIN
// // // 			</button>
// // // 			<Modal show={show} onHide={handleClose}>
// // // 				<Modal.Header closeButton>
// // // 					<Modal.Title>Modal heading</Modal.Title>
// // // 				</Modal.Header>
// // // 				<Modal.Body>
// // // 					Woohoo, you're reading this text in a modal!
// // // 					<h1
// // // 						onClick={() => {
// // // 							handleClose();
// // // 							setShow2(true);
// // // 						}}
// // // 					>
// // // 						go to register
// // // 					</h1>
// // // 				</Modal.Body>
// // // 				<Modal.Footer>
// // // 					<Button variant="secondary" onClick={handleClose}>
// // // 						Close
// // // 					</Button>
// // // 					<Button variant="primary" onClick={LoginUser}>
// // // 						LOGIN
// // // 					</Button>
// // // 				</Modal.Footer>
// // // 			</Modal>

// // // 			<Modal show={show2} onHide={handleClose2}>
// // // 				<Modal.Header closeButton>
// // // 					<Modal.Title>Modal heading</Modal.Title>
// // // 				</Modal.Header>
// // // 				<Modal.Body>
// // // 					Woohoo, you're reading this text in a modal!
// // // 					<h1
// // // 						onClick={() => {
// // // 							handleClose2();
// // // 							setShow(true);
// // // 						}}
// // // 					>
// // // 						go to login
// // // 					</h1>
// // // 				</Modal.Body>
// // // 				<Modal.Footer>
// // // 					<Button variant="secondary" onClick={handleClose2}>
// // // 						Close
// // // 					</Button>
// // // 					<Button variant="primary" onClick={LoginUser}>
// // // 						REGISTER
// // // 					</Button>
// // // 				</Modal.Footer>
// // // 			</Modal>

// // // 			<div className="mx-5">
// // // 				<Button variant="primary" onClick={LoginUser}>
// // // 					LOGIN
// // // 				</Button>
// // // 			</div>
// // // 			<div className="mx-5">
// // // 				<Button variant="primary" onClick={LoginUser}>
// // // 					LOGIN
// // // 				</Button>
// // // 			</div>
// // // 			<div className="mx-5">
// // // 				<Button variant="primary" onClick={LoginUser}>
// // // 					LOGIN
// // // 				</Button>
// // // 			</div>
// // // 		</div>
// // // 	);
// // // };

// // // export default Login;

// // // import { useContext, useState } from "react";
// // // import { AuthContext } from "../contexts/authContext";
// // // import { UserContext } from "../contexts/userContext";

// // // import { Button, Form, Modal } from "react-bootstrap";
// // // import { Link, useHistory } from "react-router-dom";

// // // function Login() {
// // // 	const router = useHistory();
// // // 	const [state, dispatch] = useContext(UserContext);
// // // 	const LoginUser = () => {
// // // 		dispatch({
// // // 			type: "LOGIN",
// // // 		});
// // // 	};

// // // 	const handleClose = () => {
// // // 		dispatch({
// // // 			type: "LOGOUT",
// // // 		});
// // // 	};
// // // 	console.log(state.isLogin);

// // // 	return (
// // // 		<></>
// // // 		// <Modal show={state.isLogin} onHide={handleClose} size="sm" centered>
// // // 		// 	<Modal.Body>
// // // 		// 		<div className="form-title mb-3">
// // // 		// 			<h4 className="text-yellow">Login</h4>
// // // 		// 			<h1>{state.isLogin ? "ANDA LOGIN" : "TIDAK LOGIN"}</h1>
// // // 		// 		</div>
// // // 		// 		<div className="d-flex flex-column">
// // // 		// 			<Form>
// // // 		// 				<Form.Group controlId="formBasicEmail">
// // // 		// 					<Form.Control
// // // 		// 						type="email"
// // // 		// 						className="form-control input-bg"
// // // 		// 						placeholder="Email"
// // // 		// 					/>
// // // 		// 				</Form.Group>

// // // 		// 				<Form.Group controlId="formBasicPassword">
// // // 		// 					<Form.Control
// // // 		// 						type="password"
// // // 		// 						className="form-control input-bg"
// // // 		// 						placeholder="Password"
// // // 		// 					/>
// // // 		// 				</Form.Group>
// // // 		// 				<Button
// // // 		// 					variant="brown"
// // // 		// 					className="btn btn-block btn-round"
// // // 		// 					onClick={LoginUser}
// // // 		// 				>
// // // 		// 					Login
// // // 		// 				</Button>
// // // 		// 			</Form>

// // // 		// 			<div className="text-center text-muted delimiter mt-2">
// // // 		// 				Don't have an account ? klick
// // // 		// 				<Link to="#" className="font-weight-bold text-muted">
// // // 		// 					{" "}
// // // 		// 					here
// // // 		// 				</Link>
// // // 		// 				.
// // // 		// 			</div>
// // // 		// 		</div>
// // // 		// 	</Modal.Body>
// // // 		// </Modal>
// // // 	);
// // // }
// // // export default Login;

// // import { useContext, useState } from "react";
// // import { Link, Redirect, useHistory } from "react-router-dom";

// // import { AuthContext } from "../contexts/authContext";

// // import { Button, Form, Modal } from "react-bootstrap";

// // function Login(props) {
// // 	return (
// // 		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
// // 			<Modal.Header closeButton>
// // 				<Modal.Title id="contained-modal-title-vcenter">
// // 					Using Grid in Modal
// // 				</Modal.Title>
// // 			</Modal.Header>
// // 			<Modal.Body className="show-grid">
// // 				kljslkajsdlks sd as sds ds ds\
// // 			</Modal.Body>
// // 			<Modal.Footer>
// // 				<Button onClick={props.onHide}>Close</Button>
// // 			</Modal.Footer>
// // 		</Modal>
// // 	);
// // }
// // export default Login;

// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";

// import "../App.css";
// import { Modal } from "react-bootstrap";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// const App = () => {
// 	const mapContainerRef = useRef(null);

// 	// initialize map when component mounts
// 	useEffect(() => {
// 		const map = new mapboxgl.Map({
// 			container: mapContainerRef.current,
// 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// 			style: "mapbox://styles/mapbox/streets-v11",
// 			center: [-104.9876, 39.7405],
// 			zoom: 12.5,
// 			accessToken:
// 				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
// 		});

// 		// add navigation control (the +/- zoom buttons)
// 		// map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

// 		// clean up on unmount
// 		return () => map.remove();
// 	}, []); // eslint-disable-line react-hooks/exhaustive-deps

// 	return (
// 		<>
// 			<div className="container pt-3">
// 				<div className="row py-3 mt-3 mt-custom">
// 					<div className="my-2 col-12 ">
// 						<h2>Menu</h2>
// 					</div>
// 					<div>
// 						<div ref={mapContainerRef} />;
// 					</div>
// 				</div>
// 				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
// 			</div>
// 			<Modal
// 				show
// 				size="lg"
// 				aria-labelledby="contained-modal-title-vcenter"
// 				centered
// 			>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Select Map</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body style={{ height: "500px" }}>
// 					<div className="map-container" ref={mapContainerRef} />;
// 				</Modal.Body>
// 				<Modal.Footer>
// 					{/* <Button onClick={props.onHide}>Close</Button> */}
// 				</Modal.Footer>
// 			</Modal>
// 		</>
// 	);
// };

// export default App;

import React, { useRef, useEffect, useState } from "react";

// images
// import Location from "../../assets/icon/location.svg";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Worker from "worker-loader!./Worker.js";
// import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_API_KEY;

export default function MapPartner() {
	const mapContainer = useRef();
	const [lng, setLng] = useState(106.8567);
	const [lat, setLat] = useState(-6.1775);
	const [zoom, setZoom] = useState(9);

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		map.on("move", () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});

		console.log("data map", map.getCenter());
		return () => map.remove();
	}, []);

	return (
		<div>
			<div className="sidebar shadow p-3">
				<h6 className="avenir-font mb-4 font-weight-bold">
					Select Delivery Location
				</h6>
				<div className="d-flex">
					<div>
						<img src={Location} alt="location" className="mr-4" />
					</div>
					<div>
						<p className="address-title">Harbour Building</p>
						<p className="address-user">
							Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
							Selatan, Banten 15413, Indonesia
						</p>
					</div>
				</div>
				<p className="avenir-font font-weight-bold">Delivery Time</p>
				<p>10 - 15 Minutes</p>
			</div>
			<div className="map-container" ref={mapContainer} />
		</div>
	);
}
