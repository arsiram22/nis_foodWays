import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "../App.css";
import { Modal } from "react-bootstrap";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const App = (props) => {
	const mapContainerRef = useRef(null);

	// initialize map when component mounts
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			// See style options here: https://docs.mapbox.com/api/maps/#styles
			style: "mapbox://styles/mapbox/streets-v11",
			center: [-104.9876, 39.7405],
			zoom: 12.5,
			accessToken:
				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
		});

		// add navigation control (the +/- zoom buttons)
		// map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

		// clean up on unmount
		return () => map.remove();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<div className="container pt-3">
				<div className="row py-3 mt-3 mt-custom">
					<div className="my-2 col-12 "></div>
					<div>
						<div ref={mapContainerRef} />;
					</div>
				</div>
				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
			</div>
			<Modal
				{...props}
				// show
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Select Map</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: "500px" }}>
					<div className="map-container" ref={mapContainerRef} />;
				</Modal.Body>
				<Modal.Footer>
					{/* <Button onClick={props.onHide}>Close</Button> */}
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default App;

// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";

// import "../App.css";
// import { Modal } from "react-bootstrap";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// const Maps = (props) => {
// 	const mapContainerRef = useRef(null);

// 	// initialize map when component mounts
// 	useEffect(() => {
// 		const map = new mapboxgl.Map({
// 			container: mapContainerRef.current,
// 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// 			style: "mapbox://styles/mapbox/streets-v11",
// 			// center: [106.957, -6.884],
// 			center: [106.65926310155055, -6.738949961213507],
// 			zoom: 9,
// 			accessToken:
// 				"pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g",
// 		});

// 		// add navigation control (the +/- zoom buttons)
// 		map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

// 		// clean up on unmount
// 		return () => map.remove();
// 	}, []); // eslint-disable-line react-hooks/exhaustive-deps

// 	return (
// 		<>
// 			<div className="container pt-3">
// 				<div className="row py-3 mt-3 mt-custom">
// 					<div>
// 						<div ref={mapContainerRef} />;
// 					</div>
// 				</div>
// 				{/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
// 			</div>
// 			<Modal
// 				{...props}
// 				size="lg"
// 				aria-labelledby="contained-modal-title-vcenter"
// 				centered
// 			>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Select Map</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body style={{ height: "500px" }}>
// 					<div className="map-container" ref={mapContainerRef} />
// 				</Modal.Body>
// 				<Modal.Footer>
// 					{/* <Button onClick={props.onHide}>Close</Button> */}
// 				</Modal.Footer>
// 			</Modal>
// 		</>
// 	);
// };

// export default Maps;
