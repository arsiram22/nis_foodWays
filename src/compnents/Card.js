import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const CardPopular = (props) => {
	const { name, logo, id } = props.data;
	const history = useHistory();
	return (
		<div className="col-md-3 mb-3">
			<div
				className="card "
				onClick={() => {
					history.push(`/market/${id}`);
				}}
				style={{
					height: "100px",
					cursor: "pointer",
				}}
			>
				<div className="card-body">
					<div className="row">
						<div className="col-sm-4 pl-2">
							<img src={logo} alt={name} width="65px" height="65px" />
						</div>
						<div className="col-sm-8 my-auto px-3">
							<h5>{name}</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export const CardNearyou = (props) => {
	const history = useHistory();
	const { name, logo, id, distance } = props.data;
	return (
		<div
			className="col-md-3 mb-3"
			style={{
				cursor: "pointer",
			}}
		>
			<div
				className="card mb-3"
				onClick={() => {
					history.push(`/market/${id}`);
				}}
			>
				<div className="py-2 px-2">
					<img
						src={logo}
						alt={name}
						style={{
							height: "auto",
							objectFit: "cover",
							width: "100%",
						}}
					/>
				</div>
				<div className="card-body ">
					<h5
						style={{
							height: "40px",
						}}
					>
						{name}
					</h5>
					<small className="">{distance} Km</small>
				</div>
			</div>
		</div>
	);
};
export const CardProduct = (props) => {
	const history = useHistory();
	const { name, logo, id, harga } = props.data;
	return (
		<div className="col-md-3 mb-3">
			<div
				className="card mb-3"
				// onClick={() => {
				// 	history.push(`/market/${id}`);
				// }}
			>
				<div className="py-2 px-2">
					<img
						src={logo}
						alt={name}
						style={{
							height: "140px",
							objectFit: "cover",
							width: "100%",
						}}
					/>
				</div>
				<div className="card-body ">
					<h5
						style={{
							height: "60px",
						}}
					>
						{name}
					</h5>
					<small className="text-danger">{harga}</small>
					<Button variant="yellow" className="btn btn-block btn-round">
						Order
					</Button>
				</div>
			</div>
		</div>
	);
};
export const CardListItem = (props) => {
	return (
		<li>
			<div
				className="card-container"
				style={{
					width: "50%",
					border: "solid 3px #d3d3d3",
					margin: "10px auto",
				}}
			>
				<p>
					<strong>{props.character.name}</strong>
				</p>
				<p>{props.character.name}</p>
				<p>{props.character.name}</p>
			</div>
		</li>
	);
};

function Card() {
	return <div></div>;
}
